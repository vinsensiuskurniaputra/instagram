import { DotsHorizontalIcon } from "@heroicons/react/solid";
import React from "react";

const Post = ({ username, userImg, img, caption }) => {
  return (
    <div className="bg-white rounded-md my-7 border">
      {/* Post Header */}
      <div className='flex items-center p-5'>
        <img
          src={userImg}
          alt={username}
          className='rounded-full h-12 object-cover p-1 border-2 border-gray-100'
        />
        <h1 className='font-bold grow mx-2'>{username}</h1>
        <DotsHorizontalIcon className='h-5' />
      </div>
      {/* Post Image */}
      <img src={img} alt="Post" className="object-cover w-full "/>
    </div>
  );
};

export default Post;
