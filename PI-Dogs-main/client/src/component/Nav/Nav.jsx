import React from "react";
import { Link } from "react-router-dom";
/* Estyles */
import styles from './Nav.module.css';
/* Imgs & assts*/
import Icon from '../../tools/icons/dog.png'

const Nav = () => {
    return (
    <div className={styles.container}>
        {/* Nav to home */}
        <Link to='/home' className={styles.reset}>
            <div className={styles.home}>
                <img className={styles.img} src={Icon} alt='Icono' width='100%' />
                <span className={styles.padding}>Home</span>
            </div>
        </Link>
        {/* Nav to create new dog or breed */}
        <Link to='/home/create'>
            <button className={styles.bttn}>
                Create Dog
            </button>
        </Link>
    </div>
    );
};

export default Nav;