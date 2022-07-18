import React from 'react'
/* Hooks */
import { useState } from 'react'
/* Styles */
import Styles from './OnSearch.module.css'
/* React-redux */
import { dogsByName } from '../../actions/index'
import { useDispatch } from 'react-redux'

const OnSearch = () => {
    const [state, setState] = useState({
        search: ''
    })
    const dispatch = useDispatch()
    const handleChange = ({ target: { name, value } }) => {
        setState({ [name]: value })
    }
    const handleSearch = () => {
        dispatch(dogsByName(state.search))
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

export default OnSearch