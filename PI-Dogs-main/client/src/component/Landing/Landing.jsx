import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Landing.module.css'

function Landing() {
    return (
        <div className={styles.bgImg}>
        <h1 className={styles.title}>Welcome!</h1>
        <br />
        <Link to ='/home'>
            <button className={styles.btn}>Press To Into</button>
        </Link>
        <br />
        <p className={styles.p}>
        Welcome to this appweb, <br/>
        where you will be able <br/>
        to find all the breeds of dogs,<br/>
        and know their characteristics.<br/>
        You can also create your dog with<br/>
         your personalized tastes.
        </p>
        </div>
    )
};

export default Landing;