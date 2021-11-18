import React, { useEffect } from "react";
import { Link } from "react-router-dom";
/* Styles */
import Styles from './DogsCards.module.css'
/* React-redux */
import { connect } from 'react-redux'
import { bringDogs, bringDogDetails, getPages, showEspPage } from "../../actions";
/* Component */
import DogCard from "../DogCard/DogCard";

const DogsCards = ({ dogs, pageToShow, bringDogs, bringDogDetails, getPages, showEspPage }) => {
    /* Bring all dogs */
    useEffect(() => {
        async function getDogs() {
            const allDogs = await bringDogs()
            return allDogs
        }
        getDogs()
    }, [bringDogs], console.log('Me trae todos los perros', bringDogs))
    /* Pagination */
    useEffect(() => {
        getPages()
        showEspPage(0)
    }, [dogs],console.log('NO TENGO IDEA DE QUE HACE ACA', dogs))

    while (!pageToShow) {
        return (<div className={Styles.container2} >Loging...</div>)
    }
    return (
        <div className={Styles.container} >
            {pageToShow.map(dog => {
                const bringDog = () => {
                    bringDogDetails(dog.id)
                }
                return (<Link onClick={bringDog} key={dog.id} className={Styles.link} to={`/home/${dog.id}`}>
                    <DogCard
                        name={dog.name}
                        imagen={dog.image}
                        temperament={dog.temperament}
                        weight={dog.weight}
                    />
                </Link>)
            })}
        </div>
    )
}
const mapStateToProps = ({ dogs, pageToShow/* , pages */ }) => ({
    dogs,
    pageToShow
})

export default connect(mapStateToProps, { bringDogs, bringDogDetails, getPages, showEspPage })(DogsCards)