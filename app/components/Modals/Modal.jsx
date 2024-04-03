'use client'
import React, { useCallback, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';



const Modal=React.FC = ({
    isOpen,
    onClose,
    body
}) => {

    const [showModal, setShowModal] = useState(isOpen)
    useEffect(() => {
      setShowModal(isOpen)
    }, [isOpen])


    const handleClose=useCallback(()=>{
        
        setShowModal(false)
        setTimeout(() => {
            onClose();
        }, 300);
    },[onClose])

    if(!isOpen){
        return null
    }
    
  return (
    <div 
    className={`
    z-50 
    justify-center 
    flex 
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-x-0
    bottom-0
    ${showModal? 'translate-y-0':'translate-y-full'}
    ${showModal? 'opacity-100':'opacity-0'}
    `}>
        <div className={` 
       
    py-8 
    relative`} >
            <span className='absolute right-12 top-12 z-[60] cursor-pointer' onClick={handleClose}>
                <CloseIcon/>
            </span>
            {body}
            
        </div>
    </div>
  )
}

export default Modal