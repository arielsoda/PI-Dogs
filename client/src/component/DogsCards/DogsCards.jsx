import React, { useEffect } from "react";
import { Link } from "react-router-dom";
/* Styles */
import Styles from './DogsCards.module.css'
/* React-redux */
import { useSelector, useDispatch } from 'react-redux'
import { getDogsAsync, bringDogDetails, getPages, showEspPage } from '../../actions/index';
/* Component */
import DogCard from "../DogCard/DogCard";

const DogsCards = () => {

    const dogs = useSelector(state => state.dogs);
    const pageToShow = useSelector(state => state.pageToShow);

    const dispatch = useDispatch();

    /* useEffect(() => {
        dispatch(showEspPage(0, pages));
    }, []); */
    
    /* Bring all dogs */
    useEffect(() => {
        async function getDogs() {
            const allDogs = dispatch(getDogsAsync())
            return allDogs
        }
        getDogs();
    }, [dispatch], /* console.log('Me trae todos los perros', getDogsAsync) */);


    /* Pagination */
    useEffect(() => {
        dispatch(getPages(dogs))
        dispatch(showEspPage(0))
    }, [dogs,dispatch]/* ,console.log('Me trae los perros por pagina', dogs, getPages, showEspPage) */)

    while (!pageToShow) {
        return (<div className={Styles.container2} >Loging...</div>)
    }
    return (
        <div className={Styles.container} >
            {pageToShow.map(dog => {
                const bringDog = () => {
                    dispatch(bringDogDetails(dog.id))
                }
                return (
                    <Link onClick={bringDog} key={dog.id} className={Styles.link} to={`/home/${dog.id}`}>
                        <DogCard
                            name={dog.name}
                            imagen={dog.image}
                            temperament={dog.temperament}
                            weight={dog.weight}
                        />
                    </Link>
                )
            }/* ,console.log('pageToShow',pageToShow) */)}
        </div>
    )
}
/* const mapStateToProps = ({ dogs, pageToShow}) => ({
    dogs,
    pageToShow
}) */

export default DogsCards