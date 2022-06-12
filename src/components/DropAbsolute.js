import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion'
import {useState} from 'react'

const hoverVariants = {
    hover: {
        backgroundColor: "#7ecbc8"
    }
}

const listVariants = {
    hidden: {
        display: "none",
        scale: 0
    },
    stageOne : {
        display: "flex",
        scale: 0
    },
    stageTwo : {
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}

const DropAbsolute = () => {

    const [visible, setVisible] = useState(false);
    const controls = useAnimation();

    // Initial useEffect
    useEffect(() => {
        controls.set("hidden")

    }, [])

    const makeVisible = () => {

        setVisible(!visible)

        if (visible) {
            controls.start("stageOne").then(() => controls.start("hidden"))
        } else {
            controls.start("stageOne").then(() => controls.start("stageTwo"))
        }
        
    }

    return (
        <div className="grid-item-6">
            <div className="container">
            <motion.button className='btn' onClick={makeVisible} onBlur={() => setVisible(false)}>Click Me</motion.button>

            <motion.ul className="droplist abs" variants={listVariants} animate={controls}>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
            </motion.ul>
            </div>
        
        </div>
    )
}

export default DropAbsolute