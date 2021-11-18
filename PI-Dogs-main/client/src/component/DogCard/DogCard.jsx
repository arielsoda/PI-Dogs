import React from 'react'
/*  Styles */
import Styles from './DogCard.module.css'

const DogCard = ({ name, imagen, temperament, weight }) => {
    return (
        <div className={Styles.container} >
            <h2 className={Styles.h3} >{name}</h2>
            <div className={Styles.spancontainer}>
                <p className={Styles.p} >Weight: {weight} Kg</p>
                <p className={Styles.p} >Temperament: {temperament}</p>
            </div>
            <div>
                <img className={Styles.img} src={imagen} alt={name} />
            </div>
        </div>
    )
}
export default DogCard;