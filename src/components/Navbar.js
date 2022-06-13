import React from 'react';
import {motion, useAnimation} from 'framer-motion'
import { useState, useEffect } from 'react';


const hoverVariants = {
    hover: {
        backgroundColor: "rgba(255,255,255,0.2)",
        transition: {
            duration: 0.5
        }
    }
}

const listVariants = {
    hidden: {
        display: "none",
        y: "-100vh",
        transition: {
            duration: 0
        }
    },
    stageOne : {
        display: "flex",
        y: "-100vh",
        transition: {
            duration: 0.5
        }
    },
    stageTwo : {
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

const chevVariants = {
    initial: {
        rotate: 0
    },
    flipped: {
        rotate: 180,
        transition: {
            type: "spring",
        }
    }
}

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const controls = useAnimation();
    const controls2 = useAnimation();

    // Initial useEffect
    useEffect(() => {
        controls.set("hidden")
        controls2.set("initial")

    }, [])

    const makeVisible = () => {

        setVisible(!visible)

        if (visible) {
            controls.start("stageOne").then(() => controls.start("hidden"))
            controls2.start("initial")
        } else {
            controls.start("stageOne").then(() => controls.start("stageTwo"))
            controls2.start("flipped")
        }
        
    }

    return (
        <nav className="navbar">
            <div className="nav-header">
                <h1>CoolNavbar</h1>
            </div>

                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Options</li>
                    <li className="nav-item">Contact Us</li>
                </ul>

            <div className="nav-full-account">
            <motion.div className="nav-account"
                onClick={makeVisible} 
                onBlur={() => setVisible(false)}
                variants={hoverVariants}
                whileHover="hover"
            >
                <div className="account-pic">
                    <img className="pic" src="./Chris-Evans.jpg"/>

                </div>
                <div className="account-name">
                    <p>Uzer12$&%&1</p>
                </div>
                <div className="account-icon">
                        <motion.i variants={chevVariants} animate={controls2} className="fa-solid fa-chevron-up"></motion.i>
                </div>
            </motion.div>
            <motion.ul className="account-list" variants={listVariants} animate={controls}>
                <motion.li variants={hoverVariants} whileHover="hover">Your Account</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Cart</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Settings</motion.li>
            </motion.ul>
            </div>
        </nav>
    )
}

export default Navbar