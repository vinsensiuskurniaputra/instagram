import { useRef, useState } from "react";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target?.result);
    };
  };
  return (
    <div>
      <Modal
        className={`max-w-lg w-[90%] h-fit p-6 absolute top-0 bottom-0 right-0 left-0 m-auto bg-white border-2 rounded-md shadow-md`}
        isOpen={open}
        onRequestClose={() => {
          setOpen((prev) => !prev);
          setSelectedFile(null);
        }}
      >
        <div className='flex flex-col justify-center items-center h-full'>
          {selectedFile ? (
            <img
              onClick={() => filePickerRef.current.click()}
              src={selectedFile}
              alt=''
              className='max-h-[250px] w-full object-contain cursor-pointer'
            />
          ) : (
            <CameraIcon
              onClick={() => filePickerRef.current.click()}
              className='rounded-full p-2 border-2 text-red-500 bg-red-200 h-14 cursor-pointer'
            />
          )}
          <input
            type='file'
            hidden
            ref={filePickerRef}
            onChange={addImageToPost}
          />
          <input
            ref={captionRef}
            type='text'
            maxLength={150}
            placeholder='Please enter your caption ...'
            className='m-4 w-full border-none text-center focus:outline-none'
          />
          <button
            disabled
            className={` w-full bg-red-500 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100 disabled:text-gray-500`}
          >
            Upload Post
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default UploadModal;
