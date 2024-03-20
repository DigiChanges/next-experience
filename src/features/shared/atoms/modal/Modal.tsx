import React from "react";
import style from "./Modal.module.css";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { RxCrossCircled } from "react-icons/rx";

interface Props {
    description: string;
    success: string;
    cancel: string;
    button?: string;
}
export const ModalComponent:React.FC<Props> = (props) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen}>{props.button}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1"><RxCrossCircled /></ModalHeader>
                            <ModalBody>
                                <p>
                                    {props.description}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    {props.cancel}
                                </Button>
                                <Button color="success" onPress={onClose}>
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
