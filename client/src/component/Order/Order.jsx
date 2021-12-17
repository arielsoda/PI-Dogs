import React, { useState } from 'react'
/*  Styles */
import Styles from './Order.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { orderA, orderD, orderLight, orderHeavy } from '../../actions'


const ordenamiento = {
    alph: true,
    weight: true
}

const Order = ({ orderA, orderD, orderLight, orderHeavy }) => {
    const [orderAW, setOrderAW] = useState(ordenamiento);

    const ordenAOD = () => {
        setOrderAW({
            ...orderAW,
            alph: !orderAW.alph
        });
    };

    const ascen = ()=>{
        orderD()
        ordenAOD()
    };
    const descen = ()=>{
        orderA()
        ordenAOD()
    };
    
    const weightLH = () => {
        setOrderAW({
            ...orderAW,
            weight: !orderAW.weight
        });
    };

    const light = ()=>{
        orderLight()
        weightLH()
    };
    const heavy = ()=>{
        orderHeavy()
        weightLH()
    };

    

    return (
        <div className={Styles.container} >
            {/* <span>Order by </span> */}
            <p className={Styles.litSpan} >Order by Alphabetic</p>
            <div>
                {orderAW.alph ? (<button className={Styles.bttns} onClick={ascen} >A-Z</button>) : (<button className={Styles.bttns} onClick={descen} >Z-A</button>)}
                {/* <button className={Styles.bttns} onClick={orderD} >A-Z</button>
                <button className={Styles.bttns} onClick={orderA} >Z-A</button> */}
            </div>
            <p className={Styles.litSpan}>Order by Weight</p>
            <div>
                {orderAW.weight ? (<button className={Styles.bttns} onClick={light} >-KG</button>) : (<button className={Styles.bttns} onClick={heavy} >+KG</button>)}
                {/* <button className={Styles.bttns} onClick={orderLight} >-KG</button>
                <button className={Styles.bttns} onClick={orderHeavy} >+KG</button> */}
            </div>
        </div>
    )
}

export default connect(null, { orderA, orderD, orderLight, orderHeavy })(Order)