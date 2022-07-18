import React, { useState } from 'react'
/*  Styles */
import Styles from './Order.module.css'
/* React-redux */
import { useDispatch } from 'react-redux'
import { orderA, orderD, orderLight, orderHeavy } from '../../actions/index'


const ordenamiento = {
    alph: true,
    weight: true
}

const Order = () => {
    const [orderAW, setOrderAW] = useState(ordenamiento);

    const dispatch = useDispatch();

    const ordenAOD = () => {
        setOrderAW({
            ...orderAW,
            alph: !orderAW.alph
        });
    };

    const ascen = ()=>{
        dispatch(orderD())
        ordenAOD()
    };
    const descen = ()=>{
        dispatch(orderA())
        ordenAOD()
    };
    
    const weightLH = () => {
        setOrderAW({
            ...orderAW,
            weight: !orderAW.weight
        });
    };

    const light = ()=>{
        dispatch(orderLight())
        weightLH()
    };
    const heavy = ()=>{
        dispatch(orderHeavy())
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

export default Order;