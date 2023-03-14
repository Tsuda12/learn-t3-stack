import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import CreateTodo from "~/components/CreateTodo";
import Todos from "~/components/Todos";
import { api } from "~/utils/api";


const Home: NextPage = () => {

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-purple-600">
        <h1 className="text-2xl text-white font-bold font-mono ">To Do</h1>
    
        <Todos />
        <CreateTodo />
      </div>
    </>
  );
};

export default Home;