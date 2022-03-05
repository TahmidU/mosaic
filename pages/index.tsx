import Button from "../components/atoms/Button";
import Carousel from "../components/organisms/Carousel";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useMediaQuery } from "react-responsive";

const Home: NextPage = () => {
  const isSmallTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return <div>{isSmallTablet ? <></> : <Carousel />}</div>;
};

export default Home;
