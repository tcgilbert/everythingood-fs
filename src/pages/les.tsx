import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";

const Les: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="">
        <h1 className="font-bol text-4xl">Everything Good</h1>
        <p>on the Lower East Side</p>
      </div>
    </>
  );
};

export default Les;
