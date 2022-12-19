import React from 'react'
import { modalState } from '../atom/modalAtom'
import {useRecoilState} from "recoil"

const UploadModal = () => {
    const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
        <h1>Modal</h1>
        {open && <h1>Modal is open</h1>}
    </div>
  )
}

export default UploadModal