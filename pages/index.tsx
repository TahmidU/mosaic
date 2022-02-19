import Button from "../components/atoms/Button";
import Carousel from "../components/organisms/Carousel";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default Home;
