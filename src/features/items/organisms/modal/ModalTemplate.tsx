import { InputForm } from '@/features/shared/atoms/imputForm/InputForm';
import style from './modal.module.css'


export const ModalComponent = ({ isVisible, onClose, children }: any) => {
    if (!isVisible) return null;



    return (
        <div className={style.containerModal} >
            <div className={style.subContainer} id="wrapper">
                <div className={style.modal}>
                    modal component
                    <form className={style.form} >
                        <div className={style.inputBlock}>
                            <label htmlFor="">Name item</label>
                            <input type="text" />
                        </div>
                        <div className={style.inputBlock}>
                        <label htmlFor="">Id item</label>
                           <input type="text" />
                        </div>
                        <div className={style.inputBlock}>
                            <button type="submit" className={style.addItem}>Add item</button>
                        </div>
                    </form>
                    <button onClick={() => onClose()} className={style.close}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}