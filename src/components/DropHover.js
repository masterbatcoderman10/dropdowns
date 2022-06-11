import React, { useState } from 'react'
import {motion} from 'framer-motion'
import DropdownInit from './DropdownInit'

const hoverVariants = {
    hover: {
        backgroundColor: "#7ecbc8"
    }
}





const DropHover = () => {

    const [visible, setVisible] = useState(false);

    const makeVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className="grid-item-3">
            <div className="container">
            <motion.button className='btn' 
                onHoverStart={() => setVisible(true)} 
                onBlur={() => setVisible(false)}>
                    Click Me
            </motion.button>
            <motion.ul 
                className={visible ? "droplist" : "droplist hidden"}
                >
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
            </motion.ul>
            </div>
        
        </div>
    )

}

export default DropHover
