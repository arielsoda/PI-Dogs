import React, { useEffect } from 'react'
/* Styles */
import Styles from './Filter.module.css'
/* React-redux */
import { useSelector, useDispatch } from 'react-redux'
import { bringTemperaments, filterBy } from '../../actions/index'

const Filter = () => {
    const temperaments = useSelector(state => state.temperaments);
    const dispatch = useDispatch();
    /* Bring me all temps for the select */
    useEffect(() => {
        async function bringTemps() {
            const allTemps = dispatch(await bringTemperaments())
            return allTemps
        };
        bringTemps()
    }, [dispatch])
    const filterDogs = (e) =>{
        dispatch(filterBy(e.target.value))
    }
    /* Component */
    return (
        <div className={Styles.container} >
            <span>Filter dogs</span>
            <select onChange={filterDogs} className={Styles.select} defaultValue='filter' name='filter' placeholder='Filter'>
                <option value='filter' disabled>Filter</option>
                <option value='ALL' name='All'>All</option>
                <option value='API' name='Api'>Api</option>
                <option value='Data Base' name='DataBase'>Data Base</option>
                { temperaments.map(temp =>(<option value={temp.name} name={temp.name} key={temperaments.indexOf(temp)} >{temp.name}</option>)) }
            </select>
        </div>
    )
};

export default Filter;