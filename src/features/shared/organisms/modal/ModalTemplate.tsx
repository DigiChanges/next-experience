
import { IModal } from '../../../items/iterfaces/IModal';
import { modalSchema } from '../../../items/validations/modalSchema';
import style from './modal.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from '@/features/shared/atoms/inputForm/InputForm';
import { modalData } from '../../../items/constants/modalData';
import Image from 'next/image';
import { icons } from '@/features/shared/hooks/icons';

interface IProps{
    onSubmit?: ()=> void;
    subtitle : string; 
    textBtn : string;
    handleModal : () => void;
}

export const ModalComponent: React.FC<IProps> = ({ onSubmit , subtitle , textBtn , handleModal}) => {
    const { register, handleSubmit , formState: { errors }, reset} = useForm<IModal>({
        resolver: yupResolver(modalSchema), 
    })
    const { IconInformation } = icons()

    return (
        <div className={style.containerModal} >
            <div className={style.subContainer} id="wrapper">
                <div className={style.modal}>
                    <div className={style.subTitle}>
                        <Image src={IconInformation.src} width={50} height={50} alt='icon information'/>
                        <h2>{subtitle}</h2>
                    </div>
                    
                    <form className={style.form}  >
                        {
                            modalData.map((data) => <InputForm key={data.id}
                            errors={errors}
                             id={data.id}
                              name={data.name}
                               register={register} 
                               type={data.type} 
                               label={data.label}
                               className={style.inputBlock}
                               />)
                        }                                              
                        <div className={style.btn}>
                            <button type="submit" className={style.addItem}>{textBtn}</button>
                        </div>
                    </form>
                    <div className={style.btnClose}>
                    <button onClick={handleModal} className={style.close}>
                        Cancel
                    </button>
                    </div>                    
                </div>
            </div>
        </div>
    )
}