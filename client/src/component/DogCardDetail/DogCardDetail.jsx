import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Styles from './DogCardDetail.module.css';
import Nav from '../Nav/Nav';

const axios = require('axios');


const DogCardDetail = () => {
    const [dog, setDog] = useState([]);

    const {id} = useParams();

    useEffect( function getId () {
        axios.get(`/dogs/${id}`)
        .then(r =>{
            console.log(r.data)
            var dog = r.data.find(e=>e)
            setDog(dog)
        })
    }, [id]
    )

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

export default DogCardDetail;