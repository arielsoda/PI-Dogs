import React from 'react'
/* Styles */
import Styles from './Clear.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { clear } from '../../actions'

const Clear = ({ clear }) => {
    return (
        <div className={Styles.container} >
            <button className={Styles.bttn} onClick={clear} >CLEAR</button>
        </div>
    )
};

export default connect(null, { clear })(Clear);