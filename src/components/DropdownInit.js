import React from 'react'
import { motion } from 'framer-motion';

const hoverVariants = {
    hover: {
        backgroundColor: "#7ecbc8"
    }
}

const DropdownInit = () => {

    return (
        
        <div className="drop1">
            <ul className="droplist">
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
            </ul>
        </div>

    )
}

export default DropdownInit;