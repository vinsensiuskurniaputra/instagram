import React from "react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggections from "./Suggections";
import { useSession } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 ${
        session
          ? "md:grid-cols-3 md:max-w-6xl "
          : "md:grid-cols-2 md:max-w-3xl "
      } mx-auto space-x-10`}
    >
      <section className='md:col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Post */}
        <Posts />
      </section>

      {session && (
        <section className='hidden md:inline-grid col-span-1'>
          <div className='fixed md:w-[250px] lg:w-[380px]'>
            {/* Mini Profile */}
            <MiniProfile />
            {/* Suggections */}
            <Suggections />
          </div>
        </section>
      )}
    </main>
  );
};

export default Feed;
