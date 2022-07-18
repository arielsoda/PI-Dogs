import React from 'react'
/* Styles */
import Styles from './Pagination.module.css'
/* React-redux */
import { showEspPage } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux'

const Pagination = () => {
    const pages = useSelector(state => state.pages);
    const dispatch = useDispatch();
    
    

    return (
        <div className={Styles.container} >
            {pages.map((arr,i) => {
                const onClickChange = (e) => {
                    dispatch(showEspPage(e.target.value))
                }
                let j = i + 1
                return (<button onClick={onClickChange} key={i} className={Styles.bttn} value={i} >{j}</button>)
            })}
        </div>
    )
}

export default Pagination