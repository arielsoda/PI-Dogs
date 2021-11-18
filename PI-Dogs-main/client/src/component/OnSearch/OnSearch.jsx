import React from 'react'
/* Hooks */
import { useState } from 'react'
/* Styles */
import Styles from './OnSearch.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { search } from '../../actions'

const OnSearch = ({ search }) => {

    const [state, setState] = useState({
        search: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        setState({ [name]: value })
    }
    const handleSearch = () => {
        search(state.search)
    }
    return (
        <div className={Styles.container} >
            <span>Search breed</span>
            <label className={Styles.label} >
                <input
                    className={Styles.input}
                    id='search'
                    name='search'
                    placeholder='Search...'
                    value={state.search}
                    onChange={handleChange} />
                <button onClick={handleSearch} className={Styles.button}>Find</button>
            </label>
        </div >
    )
}

export default connect(null, { search })(OnSearch)