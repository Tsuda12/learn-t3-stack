import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";


const Home: NextPage = () => {

  return (
    <>
      <div className="w-screen h-screen flex flex-column justify-center items-center bg-slate-500">
        <h1>TO DO</h1>
      </div>
    </>
  );
};

export default Home;