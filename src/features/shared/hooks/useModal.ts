import { useState } from "react";


export const useModal = () =>{
   
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return{
        handleModal,
        showModal
    }
        
        
}