import React from 'react'
/* Hooks */
import { useState } from 'react'
/* Styles */
import Styles from './OnSearch.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { dogsByName } from '../../actions'

const OnSearch = ({ dogsByName }) => {

    const [state, setState] = useState({
        search: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        setState({ [name]: value })
    }
    const handleSearch = () => {
        dogsByName(state.search)
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
                { state.search ? (<button onClick={handleSearch} className={Styles.button}>Find</button>): (<button className={Styles.button}>Find</button> )}
            </label>
        </div >
    )
}

export default connect(null, { dogsByName })(OnSearch)