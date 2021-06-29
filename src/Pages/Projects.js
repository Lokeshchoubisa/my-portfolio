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
             description="A full-stack web application, 'Eccomerce app', using React and node that allows users to explore various type of product in eccomerce and user can add it to cart as well as buy it. User's progress is stored on a backend created using Node and MongoDB.The backend, built using Node, Express, and Mongo,and user authentication with JWT."
              imageSrc="https://blog.edesk.com/resources/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png"
            link="https://user-app-mern-eccomerce.herokuapp.com/" ></ProjectComponent>

            </motion.div>

            <motion.div variants={projectChildVarient} >
            <ProjectComponent  title="Chat app"
             description="Developed a chat app, 'Easy chat' using React and socket.io. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.All the connection was stablished by socket.io"
              imageSrc="https://cdn.hackernoon.com/hn-images/1*mLE5ZxhtATxrwh20SL2Tlg.png"
               link="https://lokesh-chatapp.herokuapp.com/" >
               </ProjectComponent>

            </motion.div>
            </motion.div>
        </div>
    )
}
