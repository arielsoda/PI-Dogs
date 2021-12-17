import React from "react";
import { useState, useEffect } from "react";
/* Styles */
import Styles from'./Create.module.css'
/* Imgs */
/* import Sparky from '../../assest/icons/sparky.png' */
/* React Redux */
import { connect } from 'react-redux'
import { bringTemperaments, createDog } from "../../actions";

import Nav from "../Nav/Nav";

const Create = ({ temperaments, bringTemperaments }) => {
    /* Form state */
    const [state, setState] = useState({
        name: '',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        minlife_span: '',
        maxlife_span: '',
        temperament: []
    })
    /* bring Temps */
    useEffect(() => {
        async function bringTemps() {
            const allTemps = await bringTemperaments()
            return allTemps
        };
        bringTemps()
    }, [bringTemperaments])
    /* Change the state */
    const handleChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value })
    }
    const pushValues = ({ target: { value } }) => {
        if (!state.temperament.includes(value)) {
            setState({
                ...state,
                temperament: [...state.temperament, value]
            })
        }
    }
    const cleanTemps = ({ target: { name } }) => {
        let newTemps = state.temperament.filter(temp => temp !== name)
        setState({
            ...state,
            temperament: newTemps
        })
    }
    const submitDog = () => {
        if (!state.name || !state.minHeight || !state.maxHeight || !state.minWeight || !state.maxWeight || !state.minlife_span || !state.maxlife_span || state.temperament.length < 1) {
            return alert('There are empty fields required')
        }
        createDog(state)
    }
    return (
        
        <div className={Styles.container} >
            <Nav />
            {/* <div className='imgContainer'>
                <img src={Sparky} alt="Viktor´'s Dog (Frankenwene)" />
            </div> */}
            <div className={Styles.form}>
                <h2>CREATE DOG</h2>
                <div className={Styles.boxContainer} >
                    <div className={Styles.box1} >
                        {/* Name */}
                        {/* <span>Name</span> */}
                        {!state.name ? (<span className={Styles.info} >Name is required</span>) 
                            : !state.name.match(/^[A-Za-z ]+$/) ? (<span className={Styles.info} >Name can not contains Numbers</span>)
                            : null}
                        <label>
                            <input
                                className={Styles.firstInput}
                                id='name'
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={state.name}
                                onChange={handleChange}
                            />
                        </label><br />
                        {/* Min/Max height */}
                        {/* <span>Min/Max height</span> */}
                        {!state.minHeight && !state.maxHeight ? (<span className={Styles.info} >Min and Max Height is required</span>) 
                            : !state.minHeight ? (<span className={Styles.info} >Min Height is required</span>)
                            : !state.maxHeight ? (<span className={Styles.info} >Max Height is required</span>)
                            : parseInt(state.minHeight) >= parseInt(state.maxHeight) ? (<span className={Styles.advise} >Max height should be greater than Min height</span>)
                            : <span className={Styles.info2} >Data entered correctly</span>}
                        <label>
                            <input
                                id='minH'
                                type='number'
                                name='minHeight'
                                min='0'
                                placeholder='Min Height'
                                value={state.minH}
                                onChange={handleChange}
                            />
                        </label><br />
                        <label>
                            <input
                                id='maxH'
                                type='number'
                                name='maxHeight'
                                min='0'
                                placeholder='Max Height'
                                value={state.maxH}
                                onChange={handleChange}
                            />
                        </label><br />
                        {/* Min/Max Weight */}
                        {/* <span>Min/Max weight</span> */}
                        {!state.minWeight && !state.maxWeight ? (<span className={Styles.info} >Min and Max Weight is required</span>) 
                            : !state.minWeight ? (<span className={Styles.info} >Min Weight is required</span>)
                            : !state.maxWeight ? (<span className={Styles.info} >Max Weight is required</span>)
                            : parseInt(state.minWeight) >= parseInt(state.maxWeight) ? (<span className={Styles.advise} >Max Weight should be greater than Min Weight</span>)
                            : <span className={Styles.info2} >Data entered correctly</span>}
                        <label>
                            <input
                                id='minW'
                                type='number'
                                name='minWeight'
                                min='0'
                                placeholder='Min Weight'
                                value={state.minW}
                                onChange={handleChange}
                            />
                        </label><br />
                        <label>
                            <input
                                id='maxW'
                                name='maxWeight'
                                type='number'
                                placeholder='Max Weight'
                                min='0'
                                value={state.maxW}
                                onChange={handleChange}
                            />
                        </label><br />
                        {/* Life Expectancy */}
                        {/* <span>Life Expectancy</span> */}
                        {/* {!state.life_span ? (<span className='info' >Life Expectancy is required</span>) 
                            : <br />}
                        <label>
                            <input
                                id='life_span'
                                name='life_span'
                                type='number'
                                min='0'
                                placeholder='Life Expectancy'
                                value={state.life_span}
                                onChange={handleChange} />
                        </label> */}
                        

                        {/* Life Expectancy */}
                        {/* <span>Life Expectancy</span> */}
                        {!state.minlife_span && !state.maxlife_span ? (<span className={Styles.info} >Min and Max Life Span is required</span>) 
                            : !state.minlife_span ? (<span className={Styles.info} >Min Life Span is required</span>)
                            : !state.maxlife_span ? (<span className={Styles.info} >Max Weight is required</span>)
                            : parseInt(state.minlife_span) >= parseInt(state.maxlife_span) ? (<span className={Styles.advise} >Max Life Span should be greater than Min Life Span</span>)
                            : <span className={Styles.info2} >Data entered correctly</span>}
                        <label>
                            <input
                                id='minlife_span'
                                type='number'
                                name='minlife_span'
                                min='0'
                                placeholder='Min Life Span'
                                value={state.minW}
                                onChange={handleChange}
                            />
                        </label><br />
                        <label>
                            <input
                                id='maxlife_span'
                                name='maxlife_span'
                                type='number'
                                placeholder='Max Weight'
                                min='0'
                                value={state.maxlife_span}
                                onChange={handleChange}
                            />
                        </label>


                        <br />
                        <span>Add Temperament</span><br/>
                        {state.temperament.lenght ? (<span></span>)
                            : (<span className={Styles.info} >Should have at least one temperament</span>)}
                        <select onChange={pushValues} defaultValue='addTemp' name='temperament' placeholder='Add Temperament'>
                            <option value='addTemp' disabled>Add Temperament</option>
                            {temperaments.map(temp => (<option value={temp.name} name={temp.name} key={temperaments.indexOf(temp)} >{temp.name}</option>))}
                        </select>
                        <button className={Styles.bttn} onClick={submitDog} >
                            Create
                        </button>
                    </div>
                    <div className={Styles.box2} >
                        <div className={Styles.boxTemps}>
                            {state.temperament.map(temp => (<div className={Styles.divPerTemp}>
                                <button onClick={cleanTemps} name={temp}>X</button>
                                <span>{temp}</span>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ temperaments }) => ({
    temperaments
})

export default connect(mapStateToProps, { bringTemperaments })(Create)