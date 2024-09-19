import React from 'react';
import style from './Modal.module.css';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { ButtonForm, VariantType } from '@/features/shared/atoms/button/ButtonForm';
import { RxCrossCircled } from 'react-icons/rx';
import { SelectColorType } from '@/features/shared/atoms/select/SelectForm';

export enum PlacementType {
    CENTER = 'center',
    AUTO = 'auto',
    TOP = 'top',
    TOP_CENTER = 'top-center',
    BOTTOM = 'bottom',
    BOTTOM_CENTER = 'bottom-center',
}


type Props = {
    displayButton?: boolean;
    description?: React.ReactNode;
    success?: string;
    cancel?: string;
    button?: React.ReactNode;
    footer?:string;
    header?:string;
    modalPlacement?: PlacementType;
    classNames?: {
        button?: string;
        modal?: string;
        modalContent?: string;
        modalHeader?: string;
        modalBody?: string;
        modalFooter?: string;
    };
    isOpen?: boolean;
    onOpen?: () => void;
    onOpenChange?: () => void;
    isOnClick?: () => void;
}
export const ModalComponent = (props: Props) => {
  return (
    <>

      {
        props.displayButton ?
          <>
            <ButtonForm className={props.displayButton ? style.buttonModal : style.buttonModalHidden} onPress={props.onOpen}>{props.button}</ButtonForm>
            <Modal className={style.modal} isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                    <ModalBody className={style.modalBody}>
                      <RxCrossCircled />
                      <p>
                        {props.description}
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <ButtonForm className={style.dangerButton} color={SelectColorType.DANGER} variant={VariantType.LIGHT} onPress={onClose}>
                        {props.cancel}
                      </ButtonForm>
                      <ButtonForm color={SelectColorType.SUCCESS} onPress={props.isOnClick}>
                        {props.success}
                      </ButtonForm>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
          :
          <>
            <ButtonForm className={props.classNames?.button ?? ''} onPress={props.onOpen}>{props.button ?? null}</ButtonForm>
            <Modal placement={props.modalPlacement} className={props.classNames?.modal ?? ''} isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
              <ModalContent>
                {() => (
                  <>
                    <ModalHeader className={props.classNames?.modalHeader ?? ''}> {props.header ?? null} </ModalHeader>
                    <ModalBody className={props.classNames?.modalBody ?? ''}>
                      {props.description ?? null}
                    </ModalBody>
                    <ModalFooter className={props.classNames?.modalHeader ?? ''}>
                      {props.footer ?? null}
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
      }

    </>
  );
};
