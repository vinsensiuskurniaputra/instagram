import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      username: "vinsensiuskurniaputra",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEUkOyuPRDRBg/profile-displayphoto-shrink_800_800/0/1632062579605?e=2147483647&v=beta&t=qrWGaUbDba5-fBnA3u_N7ixokE4gTlHi2l5b3xoFT0s",
      img: "https://images.unsplash.com/photo-1671314888213-7e724de48113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "Nice",
    },
    {
      id: "2",
      username: "putra",
      userImg:
        "https://media-exp1.licdn.com/dms/image/C4E03AQEUkOyuPRDRBg/profile-displayphoto-shrink_800_800/0/1632062579605?e=2147483647&v=beta&t=qrWGaUbDba5-fBnA3u_N7ixokE4gTlHi2l5b3xoFT0s",
      img: "https://images.unsplash.com/photo-1671138638073-ba77c5c2e388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      caption: "Good",
    },
  ];
  return (
    <div>
        {posts.map((post) => (
            <Post 
                key={post.id}
                {...post}
            />
        ))}
    </div>
  );
};

export default Posts;
