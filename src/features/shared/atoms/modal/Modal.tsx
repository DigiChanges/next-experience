import React from 'react';
import style from './Modal.module.css';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import { ButtonForm } from '@/features/shared/atoms/button/ButtonForm';
import { RxCrossCircled } from 'react-icons/rx';

type Props = {
    displayButton?: boolean;
    description?: any;
    success?: string;
    cancel?: string;
    button?: any;
    footer?:string;
    header?:string;
    modalPlacement?: any
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
                      <ButtonForm className={style.dangerButton} color="danger" variant="light" onPress={onClose}>
                        {props.cancel}
                      </ButtonForm>
                      <ButtonForm color="success" onPress={props.isOnClick}>
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
            <Modal placement={props.modalPlacement ?? null} className={props.classNames?.modal ?? ''} isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
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
