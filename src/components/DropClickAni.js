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
        opacity: 0,
        transition: {
            duration:0.4
        }
    },
    visible : {
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
}

const DropClickAni = () => {

    const [visible, setVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        controls.set("hidden")

        // if (visible) {
        //     controls.start("hidden")
        // } else {
        //     controls.start("visible")
        // }

        // if (!visible) {
        //     controls.start("hidden")
        // }


    }, [])

    useEffect(() => {

        if (!visible) {
            controls.start("hidden")
        }

    }, [visible])

    const makeVisible = () => {

        setVisible(!visible)

        if (visible) {
            controls.start("hidden")
        } else {
            controls.start("visible")
        }
        
    }

    return (
        <div className="grid-item-4">
            <div className="container">
            <motion.button className='btn' onClick={makeVisible} onBlur={() => setVisible(false)}>Click Me</motion.button>

            <motion.ul className="droplist" variants={listVariants} animate={controls}>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
            </motion.ul>
            </div>
        
        </div>
    )
}

export default DropClickAni