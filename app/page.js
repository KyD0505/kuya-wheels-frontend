
'use client'
import Image from "next/image";
import Carousel from "./_components/carousel";
import GoogleMap from "./_components/googleMap";
import useScrollToSection from "./_hooks/scrollToPage";
import { RedirectType, redirect, useRouter } from "next/navigation";
import { ACTION_NAVIGATE } from "next/dist/client/components/router-reducer/router-reducer-types";


export default function Main() {
  try {
    useRouter().push("/page/client");
  } catch (error) {
    console.log(error.message)
  }

}
