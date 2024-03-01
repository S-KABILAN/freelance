import React from "react";
import Intro from "./components/Intro";
import Why from "./components/Why";
import Price from "./components/Price";
import Affilliates from "./components/Affiliates";
import Ourwork from "./components/Ourwork";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Techstack from "./components/Techstack";
import Navbar from "./components/Navbar";
import Ourofferings from "./components/Ourofferings";


const index = () =>{
    return(
        <div>
            <Navbar/>
            <Intro/>
            <Why/>
            <Ourofferings/>
            <Techstack/>
            <Ourwork/>
            <Price/>
            <Testimonials/>
            <Footer/>
            
        </div>
        

    )
    
}

export default index