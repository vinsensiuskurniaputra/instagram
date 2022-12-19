import React from 'react'
import { modalState } from '../atom/modalAtom'
import {useRecoilState} from "recoil"
import Modal from "react-modal"

const UploadModal = () => {
    const [open, setOpen] = useRecoilState(modalState)
  return (
    <div className=''>
            <Modal
                className={`max-w-lg w-[90%] h-[300px] absolute top-0 bottom-0 right-0 left-0 m-auto bg-white border-2 rounded-md shadow-md`}
                isOpen={open} 
                onRequestClose={()=> setOpen((prev)=> !prev)}
            >
                <div className='flex flex-col justify-center items-center h-full'>
                <h1>Modal</h1>
                </div>
            </Modal>
    </div>
  )
}

export default UploadModal