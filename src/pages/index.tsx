import { type NextPage } from "next";
import Head from "next/head";
import { HomeNav } from "../components/HomeNav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Everything Good</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto flex h-screen w-screen justify-center bg-white sm:px-6 lg:px-8">
        <div className="my-auto">
          <h1 className="pt-5 text-center font-eb text-7xl font-medium md:text-8xl">
            Everything Good
          </h1>
          <p className="mt-4 text-center font-robo text-2xl ">
            guides to everything good in the city
          </p>
          <div className="p-3" />
          <div className="p-3" />
          <HomeNav />
          {/* <Subscribe /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
