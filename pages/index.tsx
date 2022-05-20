import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeLayout from "../components/layout/HomeLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=" ">
      <HomeLayout className=" flex flex-col items-center justify-between min-h-screen ">
        <div className=" bg-yellow-200 container p-3">Body</div>
      </HomeLayout>
    </div>
  );
};

export default Home;
