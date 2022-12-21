import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Post = ({id, username, profileImg, image, caption }) => {
  const {data: session} = useSession()
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  useEffect(()=>{
    const unsubscribe = onSnapshot(
      query(collection(db, "post", id, "comments"), orderBy ("timestamp", "desc")),
      (snapshot) => {
        setComments(snapshot.docs)
      }
    )
  }, [db, id])

  const sendComment = async (event) =>{
    event.preventDefault()
    const commentToSend = comment
    setComment("")
    await addDoc(collection(db, "post", id, "comments"),{
      comment: commentToSend,
      username: session?.user?.username,
      userImg : session?.user?.image,
      timestamp : serverTimestamp()

    })
  }
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
        {/* comments */}
        {comments.length > 0 && (
          <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-thin">
            {comments.map((comment) => (
              <div className="flex space-x-2 items-center mb-2">
                <img className="h-7 rounded-full object-cover" src={comment.data().userImg} alt="" />
                <p className="font-semibold">{comment.data().username}</p>
                <p className="flex-1 truncate ">{comment.data().comment}</p>
              </div>
            ))}
          </div>
        )}
        {/* Post input box */}
      {session && (
        <form className="flex items-center p-4 space-x-2">
            <EmojiHappyIcon className="h-7 cursor-pointer"/>
            <input value={comment} onChange={(event) => setComment(event.target.value)} type="text" placeholder="Enter your comment..." className="border-none flex-1 focus:ring-0 focus:outline-none"/>
            <button onClick={sendComment} disabled={!comment.trim()} className="text-blue-400 font-bold disabled:text-gray-400">Post</button>
        </form>
      )}
    </div>
  );
};

export default Post;
