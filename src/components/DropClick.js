import React, { useState } from 'react'
import {motion} from 'framer-motion'
import DropdownInit from './DropdownInit'

const hoverVariants = {
    hover: {
        backgroundColor: "#7ecbc8"
    }
}



const DropClick = () => {

    const [visible, setVisible] = useState(false);

    const makeVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className="grid-item-2">
            <div className="container">
            <motion.button className='btn' onClick={makeVisible} onBlur={() => setVisible(false)}>Click Me</motion.button>
            <ul className={visible ? "droplist" : "droplist hidden"}>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Lorem</motion.li>
                <motion.li variants={hoverVariants} whileHover="hover">Ipsum</motion.li>
            </ul>
            </div>
        
        </div>
    )

}

export default DropClick
