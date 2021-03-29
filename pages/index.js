import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/organisms/header";
import Hero from "../components/organisms/hero";
import ProductLists from "../components/organisms/product-lists"
import Footer from "../components/organisms/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductLists />
      <Footer />
    </>
  );
}
