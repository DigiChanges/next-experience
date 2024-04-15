import React from "react";
import style from "./Modal.module.css";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";
import { RxCrossCircled } from "react-icons/rx";

interface Props {
    description: string;
    success: string;
    cancel: string;
    button?: string;
    displayButton?: boolean;
    isOpen?: boolean;
    onOpen?: () => void;
    onOpenChange?: () => void;
    isOnClick?: () => void;
}
export const ModalComponent:React.FC<Props> = (props) => {

    return (
        <>
            <Button className={props.displayButton ? style.buttonModal : style.buttonModalHidden} onPress={props.onOpen}>{props.button}</Button>
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
                                <Button className={style.dangerButton} color="danger" variant="light" onPress={onClose}>
                                    {props.cancel}
                                </Button>
                                <Button color="success" onPress={props.isOnClick}>
                                    {props.success}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
