import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Everything Good</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto h-screen max-w-3xl">
        <h1 className="pt-5 text-center font-sans text-7xl font-medium md:text-8xl">
          Everything Good
        </h1>
        <div className="my-8" />
        <div className="border-t border-b border-t-gray-500 border-b-gray-500 py-3">
          <Link href="/les">on the Lower East Side</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
