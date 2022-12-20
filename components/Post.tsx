import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import React from "react";
import { useSession } from "next-auth/react";

const Post = ({ username, profileImg, image, caption }) => {
  const {data: session} = useSession()
  return (
    <div className="bg-white rounded-md my-7 border">
      {/* Post Header */}
      <div className='flex items-center p-5'>
        <img
          src={profileImg}
          alt={username}
          className='rounded-full h-12 object-cover p-1 border-2 border-gray-100'
        />
        <h1 className='font-bold grow mx-2'>{username}</h1>
        <DotsHorizontalIcon className='h-5 btn' />
      </div>
      {/* Post Image */}
      <img src={image} alt="Post" className="object-cover w-full "/>
      {/* Post Button */}
      {session && (
        <div className="flex px-4 pt-4 justify-between">
            <div className="flex space-x-4">
            <HeartIcon className="btn"/>
            <ChatIcon className="btn"/>
            </div>
            <BookmarkIcon className="btn"/>
        </div>
      )}
        {/* Post Caption */}
        <div className="flex p-5 space-x-2">
            <h1 className="font-bold">{username}</h1>
            <p className="truncate">{caption}</p>
        </div>
        {/* Post input box */}
      {session && (
        <form className="flex items-center p-4 space-x-2">
            <EmojiHappyIcon className="h-7 cursor-pointer"/>
            <input type="text" placeholder="Enter your comment..." className="border-none flex-1 focus:ring-0 focus:outline-none"/>
            <button className="text-blue-400 font-bold">Post</button>
        </form>
      )}
    </div>
  );
};

export default Post;
