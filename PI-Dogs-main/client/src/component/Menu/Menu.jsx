import React from 'react'
/* Styles */
import Styles from './Menu.module.css'
/* Components */
import OnSearch from '../OnSearch/OnSearch.jsx'
import Filter from '../Filter/Filter.jsx'
import Order from '../Order/Order.jsx'


const Menu = () => {
    return (
        <div className={Styles.container}>
            <OnSearch />
            <Filter />
            <Order />
        </div>
    )
}

export default Menu