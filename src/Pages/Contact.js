import React from 'react'
import Header from "../components/Header"
import Form from "../components/Form"
import MyCard from "../components/MyCard"
import {motion} from "framer-motion"
import "./Contact.css"
import fire from '../firebase'

export default function Contact() {

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
            // opacity:0
            x:"100vw"
        },
        visible:{
            x:0,
            transition:{
                duration:2,
                type:"spring"
            }
        }


    }

    return (
        <div>
            <Header />
            <div className="hero-section">
           
            {/* <MyCard /> */}
            <motion.div variants={heroVarients2} animate="visible" initial="hidden" className="img-area">
    
                <img src="images\2282.jpg" alt="my-image"></img>
               
            </motion.div> 
            
            <motion.div variants={heroVarients1} animate="visible" initial="hidden" className="text-area">
               <h1 className="mb-4 talk-text" >Let's talk</h1>
               <Form />

            </motion.div>
            

            
          
            </div>
        </div>
    )
}


