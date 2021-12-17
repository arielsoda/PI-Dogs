import React from "react";
/* Styles */
import Styles from './Home.module.css'
/* Components */
import Menu from "../Menu/Menu.jsx";
import DogsCards from "../DogsCards/DogsCards.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Nav from '../Nav/Nav.jsx'

const Home = () => {
    return (
        <div className={Styles.container} >
            <div className={Styles.container2} >
                <Nav />
                <Menu /><br/>
                <DogsCards />
            </div>
            <div>
                <Pagination />
            </div> 
        </div>
    )
}

export default Home;