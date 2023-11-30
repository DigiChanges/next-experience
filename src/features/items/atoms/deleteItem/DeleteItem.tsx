'use client'
import React from "react";
import { Button, Image } from '@nextui-org/react';
import style from './deleteItem.module.css'
import { icons } from '@/features/shared/hooks/icons';
import { Card, CardBody } from "@nextui-org/react";
import { useModal } from "@/features/shared/hooks/useModal";

export const DeleteItem: React.FC = () => {
    const { DeleteIcon, IconAlert } = icons();
    const { showModal, handleModal } = useModal();

    return (
      
            <div className={style.container} >
                <Button isIconOnly className={style.btnDelete} onClick={handleModal}>
                    <Image src={DeleteIcon.src} width={100} height={100} alt={"delete"} />
                </Button>
                {
                    showModal && <Card className={style.containerAlert}>
                        <CardBody className={style.subContainer}>
                            <Image className={style.img} src={IconAlert.src} alt="icon alert" />
                            <p className={style.text}>Are you sure you want delete this item?</p>

                            <button className={style.btnSuccess}>
                                Accept
                            </button>
                            <button onClick={handleModal} className={style.btnClose}>
                                Cancel
                            </button>
                        </CardBody>

                    </Card>
                }


            </div>

        
    )


}