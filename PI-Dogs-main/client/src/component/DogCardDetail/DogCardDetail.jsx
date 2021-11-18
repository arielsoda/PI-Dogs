import React from 'react';
/* Styles */
import Styles from './DogCardDetail.module.css';
/* React-redux */
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';


const DogCardDetail = ({ dog }) => {
    return (
        <div className={Styles.div}>
            <Nav />
            <h2 className={Styles.title}  >{dog.name}</h2>
            <div className={Styles.container} >
                <div className={Styles.imgContainer} >
                    <img className={Styles.img} src={dog.image} alt={dog.name} width='100%' />
                </div>
                <div className={Styles.box} >
                    <h3>Temperament:</h3><br />
                    <p className={Styles.p} >{dog.temperament}</p>
                    <h3>Weight:</h3><br />
                    <p className={Styles.p} >{dog.weight}</p>
                    <h3>Height:</h3><br />
                    <p className={Styles.p} > {dog.height}</p>
                    <h3>life Expectancy:</h3><br /> 
                    <p className={Styles.p} > {dog.life_span}</p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ dog }) => ({ dog })
export default connect(mapStateToProps)(DogCardDetail)