import React from "react";
import Intro from "./components/Intro";
import Why from "./components/Why";
import Price from "./components/Price";
import Affilliates from "./components/Affiliates";
import ProductReviewsPage from "./components/ProductReviewsPage";
import Ourwork from "./components/Ourwork";
import Testimonials from "./components/Testimonials";
import Footer from "./components/footer";
import Techstack from "./components/Techstack";


const index = () =>{
    return(
        <div>
            <Intro/>
            <Why/>
            <Techstack/>
            <Ourwork/>
            <Price/>
            <Testimonials/>
            
            <Footer/>
            
        </div>
        

    )
    
}

export default index