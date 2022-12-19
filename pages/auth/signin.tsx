import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import { Header } from "../../components";

const signin = ({ providers }) => {
  return (
    <div>
      <Head>
        <title>Sign In Page</title>
      </Head>
      <Header />
      <div className='flex justify-center mt-20 space-x-7 '>
        <img
          className=' hidden object-contain rotate-6 md:inline-flex md:w-48 rounded-lg '
          src='https://awsimages.detik.net.id/community/media/visual/2022/12/15/candid-stories.webp?w=890'
          alt=''
        />
        <div className="flex flex-col items-center ">
          <img
            className='w-32 object-cover'
            src='https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg'
            alt=''
          />
          <p className="text-sm italic my-10 text-center">This app is created for learning</p>

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={()=>signIn(provider.id,{callbackUrl:"/"})} className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500">Sign in with {provider.name}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default signin;

export const getServerSideProps = async (contex) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
