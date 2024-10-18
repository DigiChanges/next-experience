import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import IconPencil from '@/asset/images/pencil.svg';
import IconPencilWhite from '@/asset/images/pencilWhite.svg';
import { updateUserImage } from '@/features/profile/actions/ProfileAction';
import style from '@/features/profile/molecules/userImage/user-image.module.css';
import { profileImageSchema } from '@/features/profile/validations/profileImageSchema';
import { User } from '@/features/shared/actions/fetchUsers';
import { handleUploadFile } from '@/features/shared/actions/fileAction';
import { InputForm, InputType } from '@/features/shared/atoms/inputForm/InputForm';
import { images } from '@/features/shared/hooks/images';

type IProfileForm = {
  file?: object | null;
  image_id?: string | null;
};

interface Props {
  userProfile: User;
  edit: boolean;
}

export const UserImage = ({ userProfile, edit }: Props) => {
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

  const { user } = images();
  const handleFileInputClick = () => {
    const input: HTMLElement | null = document.getElementById('file');

    if (input) {
      input.click();
    }
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('entre');
    if (event.target.files?.[0]) {
      const file = new FormData();
      file.append('file', event.target.files[0]);
      console.log('entre', event.target.files[0]);
      const file_id = await handleUploadFile(file);

      const data = {
        id: userProfile.id,
        first_name: userProfile.first_name,
        last_name: userProfile.last_name,
        phone: userProfile.phone,
        email: userProfile.email,
        image_id: file_id.id,
      };

      if (file_id) {
        setValue('file', file_id.id);
        await toast.promise(updateUserImage(data), {
          error: `${alert('error')}`,
          success: `${alert('success')}`,
          pending: `${alert('pending')}`,
        });
      }
    }
  };

  const profileImage = userProfile.image_id ?? user;

  return (
    <>
      <div className={style.containerImg}>
        <Image src={profileImage} alt={'user'} width={82} height={82} className={style.profileImage} />
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
