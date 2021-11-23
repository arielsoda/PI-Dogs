import React, { useEffect } from 'react'
/* Styles */
import Styles from './Filter.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { bringTemperaments, filterBy } from '../../actions'

const Filter = ({ temperaments, bringTemperaments, filterBy }) => {
    /* Bring me all temps for the select */
    useEffect(() => {
        async function bringTemps() {
            const allTemps = await bringTemperaments()
            return allTemps
        };
        bringTemps()
    }, [bringTemperaments])
    const filterDogs = (e) =>{
        filterBy(e.target.value)
    }
    /* Component */
    return (
        <div className={Styles.container} >
            <span>Filter dogs</span>
            <select onChange={filterDogs} className={Styles.select} defaultValue='filter' name='filter' placeholder='Filter'>
                <option value='filter' disabled>Filter</option>
                <option value='API' name='Api'>Api</option>
                <option value='Data Base' name='DataBase'>Data Base</option>
                { temperaments.map(temp =>(<option value={temp.name} name={temp.name} key={temperaments.indexOf(temp)} >{temp.name}</option>)) }
            </select>
        </div>
    )
}

const mapStateToProps = ({ temperaments }) => ({
    temperaments
})

export default connect(mapStateToProps, { bringTemperaments, filterBy })(Filter)