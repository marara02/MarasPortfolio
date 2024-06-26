import React, { useState } from 'react'
import css from './Header.module.scss'
import {motion} from 'framer-motion'
import {getMenuStyles, headerVariants} from '../../utils/motion'
import {BiMenuAltRight} from 'react-icons/bi'
import useHeaderShadow from "../../hooks/useHeaderShadow"

const Header = () => {
    const [menuOpened, setMenuOpened] = useState
    (false);
    const headerShadow = useHeaderShadow()
    return(
        <motion.div
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once: false, amount: 0.25}}
        className={`padding ${css.wrapper}`}
        style={{boxShadow: headerShadow}}
        >

        <div className={`paddings ${css.wrapper}`}>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>
                    Marzhan's Portfolio
                </div>

                <ul 
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu}`}>
                    <li><a href="">Services</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Test</a></li>
                </ul>

                <div className={css.menuIcon}
                     onClick={() => setMenuOpened((prev) => !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Header