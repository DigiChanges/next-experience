import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import IconPencil from '@/asset/images/pencil.svg';
import IconPencilWhite from '@/asset/images/pencilWhite.svg';
import { useContextUser } from '@/contexts/UserContext';
import { updateUserImage } from '@/features/profile/actions/ProfileAction';
import style from '@/features/profile/molecules/userImage/user-image.module.css';
import { profileImageSchema } from '@/features/profile/validations/profileImageSchema';
import { handleGetFile, handleUploadFile } from '@/features/shared/actions/fileActions';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { UserHasRole } from '@/features/shared/interfaces/UserHasRole';

type IProfileForm = {
  file?: object | string | null;
  image_id?: string | null;
};

interface Props {
  userProfile: UserHasRole;
  edit: boolean;
}

export const UserImage = ({ userProfile, edit }: Props) => {
  const { avatar, handleSetAvatar } = useContextUser();
  const alert = useTranslations('ToastUpdate');
  const { theme } = useTheme();
  const pencilToggle = theme === 'dark' ? IconPencilWhite : IconPencil;

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<IProfileForm>({
    resolver: yupResolver(profileImageSchema),
  });

  const handleFileInputClick = () => {
    const input: HTMLElement | null = document.getElementById('file');

    if (input) {
      input.click();
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files?.[0]) {
      const file = new FormData();
      file.append('file', event.target.files[0]);
      const fileMetadata = await handleUploadFile(file);
      const data = {
        id: userProfile.user_id.id,
        first_name: userProfile.user_id.first_name,
        last_name: userProfile.user_id.last_name,
        phone: userProfile.user_id.phone,
        email: userProfile.user_id.email,
        image_id: fileMetadata.id,
      };

      if (fileMetadata.id) {
        setValue('file', fileMetadata.id);
        await toast.promise(updateUserImage(data), {
          error: `${alert('error')}`,
          success: `${alert('success')}`,
          pending: `${alert('pending')}`,
        });

        const image = await handleGetFile(fileMetadata.id);
        handleSetAvatar(image.path);
      }
    }
  };

  return (
    <>
      <div className={style.containerImg}>
        <Image src={avatar} alt={'user'} width={82} height={82} className={style.profileImage} />
        {edit && (
          <button onClick={handleFileInputClick}>
            <Image src={pencilToggle} alt={'pencil'} className={style.pencil} />
          </button>
        )}
      </div>
      <InputForm
        type={'file'}
        name={'file'}
        label={'Image'}
        register={register}
        errors={errors}
        id={'file'}
        input_type={InputType.FILE}
        className={style.hiddenInput}
        onChange={handleChange}
      />
    </>
  );
};
