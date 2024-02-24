import Image from "next/image";
import { Inter } from "next/font/google";
import Index from './home/index'
import Navbar from "@/pages/home/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Navbar/>
    <Index/>

    </>
    
    
  );
}
