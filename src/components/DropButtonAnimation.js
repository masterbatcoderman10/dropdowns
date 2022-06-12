import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion'
import {useState} from 'react'

const hoverVariants = {
    hover: {
        background: "rgb(165,241,238)",
        background: "linear-gradient(14deg, rgb(167, 241, 239, 0.7) 2%, rgba(94,255,198,0.7) 100%)",
        transition: {
            duration: 0.5
        }
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

const chevVariants = {
    initial: {
        rotate: 180
    },
    flipped: {
        rotate: 0,
        transition: {
            type: "spring",
        }
    }
}

const DropButtonAnimation = () => {

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
        <div className="grid-item-7">
            <div className="container">
                <motion.div 
                className="btn-div" 
                onClick={makeVisible} 
                onBlur={() => setVisible(false)}
                variants={hoverVariants}
                whileHover="hover">
                    <div className="txt">Click Me</div>
                    <div className="icon">
                        <motion.i variants={chevVariants} animate={controls2} class="fa-solid fa-chevron-down"></motion.i>
                    </div>
                </motion.div>
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

export default DropButtonAnimation