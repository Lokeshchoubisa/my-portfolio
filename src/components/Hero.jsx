import React, { useState } from 'react'
import "./Hero.css"
// import Buttom from "./Button"
import Button from './Button'
import {motion} from "framer-motion"

function Hero() {



    const textTransition={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                duration:2
            }
        }
        
    }

    const heroVarients1={
        hidden:{
            opacity:0,
            x:"-100vw"
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                duration:2,
                type:"spring",
                
            }
        }


    }
    const heroVarients2={
        hidden:{
            opacity:0,
            x:"100vw"
        },
        visible:{
            x:0,
            opacity:1,
            transition:{
                duration:2,
                type:"spring"
            }
        }


    }
    // console.log(window.innerWidth);
    // var width_latest=window.innerWidth;

    
    return (
        // {setwidth()}
        <div className="hero-section">
            
            <motion.div variants={heroVarients2} animate="visible" initial="hidden" className="img-area">
                <img src="images\27834427.jpg" alt="my-image"></img>
               
            </motion.div> 
            
            <motion.div variants={heroVarients1} animate="visible" initial="hidden" className="text-area">
                <motion.h1 variants={textTransition} animate="visible" initial="hidden" >Hello World! </motion.h1>
                <p>I am Lokesh Choubisa,A full stack developer</p>
                <a href="/contact" className="btn btn-medium btn-primary" >Contact me</a>
            </motion.div>

            
        </div>
    )
}

export default Hero;