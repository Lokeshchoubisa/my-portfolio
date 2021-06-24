import React from 'react'
import ProjectComponent from "../components/ProjectComponent"
import Header from "../components/Header"
import { motion, useSpring } from 'framer-motion'




export default function Projects() {

    const projectVarient={
        hidden:{
            opacity:0,
            y:"-100vh"
        },
        visible:
        {
            opacity:1,
            y:0,
            transition:{
                when:"beforeChildren",
                type:"spring",
                mass:1,
                staggerChildren:.4
            }
        }
    }
    
    const projectChildVarient={
        hidden:{
            opacity:0
        },
        visible:
        {
            opacity:1,
            transition:{
                duration:1.2
               
            }
        }
    }



    return (
        <div>

            <Header />
           <motion.div variants={projectVarient} animate="visible" initial="hidden">
           <h1 className="project-title">My Projects</h1>
           <hr className="line" />
            <motion.div variants={projectChildVarient} >
           
            <ProjectComponent  title="Eccomerce project" 
             description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius maiores atque voluptatibus recusandae, maxime nemo ratione rem temporibus facilis! Deserunt"
              imageSrc="https://blog.edesk.com/resources/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png"
            link="https://user-app-mern-eccomerce.herokuapp.com/" ></ProjectComponent>

            </motion.div>

            <motion.div variants={projectChildVarient} >
            <ProjectComponent  title="Chat app"
             description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius maiores atque voluptatibus recusandae, maxime nemo ratione rem temporibus facilis! Deserunt"
              imageSrc="https://cdn.hackernoon.com/hn-images/1*mLE5ZxhtATxrwh20SL2Tlg.png"
               link="https://lokesh-chatapp.herokuapp.com/" >
               </ProjectComponent>

            </motion.div>
            </motion.div>
        </div>
    )
}
