import React, { useState } from 'react'
import "./Header.css"
import Button from "./Button"
import {motion} from "framer-motion"
import {Link,Redirect} from "react-router-dom"
// import {Link} from "react-router-dom"

function Header() {
    const [hover,setHover]=useState(false)
    const [show,setShow]=useState(false)

    console.log(window.innerWidth)
    const displayMenu={
        // y:"-100vh"
    }    
    const headerVarient={
        hidden:{
            // opacity:1
            border:"none"
        },
        onhover:{
            border:"2px solid white",
            // opacity:0 
        }
    }

    var menuVarient=show ? {
        hidden:{
            x:"-100vw"
        },
        visible:{
            x:0,
            transition:{
                duration:.6
            }
        }
    }:{
        hidden:{
            x:"-100vw"
        },
        visible:{
            x:"-100vw",
            transition:{
                duration:.6
            }
        } 
    }
    if(window.innerWidth > 1067)
    {
        menuVarient={
            hidden:{
                x:0
            },
            visible:{
                x:0,
                transition:{
                    duration:0
                }
            }
        }
    }
    console.log(hover)

    return (
        <motion.div 
        animate={{
                y:0
            }}
            initial={{ 
                // y:-120
            }}

            transition={{
                duration:.7,
                // type:'spring',
            }}
        
        
        className="header">
            <motion.div  
            className="header-logo">
                <Link style={{textDecoration:"none",color:"white"}} to="/"> <h1>LOKESH</h1></Link>
            </motion.div>

            <motion.ul variants={menuVarient} initial="hidden" animate="visible" style={displayMenu}  className="menu-items">
                <motion.a href="/" className="item" ><li >Home</li> </motion.a>
                {/* <a href="/resume" className="item"><li >Resume</li> </a> */}
                <a href="/projects" className="item"><li >Projects</li> </a>
                <a href="/contact" className="item"><li >Contact Me</li></a>
               
            </motion.ul>
            <div className="menu">
            <i onClick={()=>setShow(!show)} class="fas fa-bars"></i>
            </div> 
            
        </motion.div>
    )
}




export default Header;