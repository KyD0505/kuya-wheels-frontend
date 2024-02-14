"use client"
import Footer from "@/app/_components/footer";
import Nav from "@/app/_components/nav";
import { HomeIndex } from "@/app/_hooks/pageIndexes";
import Head from "next/head";
import { Children, createContext, useEffect, useState } from "react";

// export const metadata = {
//  title: 'your Title',
//  description: 'your Description',
// };
const HomeLayout = ({children}) => {
  
  return (
    <>
    <Head>
      <title>Kuya Wheels | Home</title>

    </Head>
    <div>
      <HomeIndex>
        <Nav />
          {children}
        <Footer />
      </HomeIndex>
    </div>
    </>
  );
}

export default HomeLayout;