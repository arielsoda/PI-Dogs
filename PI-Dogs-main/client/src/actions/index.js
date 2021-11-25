import axios from 'axios';

export const GETDOGS = "GET_DOGS";
export const ORDERA = "ORDER_A";
export const ORDERD = "ORDER_D";
export const HEAVY = "HEAVY_TO_LIGHT";
export const LIGHT = "LIGHT_TO_HEAVY";
export const GETTEMPS = "GET_TEMPS";
export const FILTER = "FILTER_BY";
export const SEARCH = "SEARCH_BY_NAME";
export const DOG = "SHOW_DOG_ROUTE";
export const PAGES = "GET_NUMBER_PAGES";
export const SHOWPAGE = "SHOW_NUMBER_PAGE";


const server = 'http://localhost:3001';
/* Dogs in the server 3001 */
export const bringDogs = () => {
    return async function (dispatch) {
        /* server back */
        let serverDogs = `${server}/dogs`;
        const response = await axios(serverDogs);
        const data = response.data
        return dispatch({
            type: GETDOGS,
            payload: data
        })
    }
}


/* Temperaments in the server 3001 */
export const bringTemperaments = () => {
    return async function (dispatch) {
        let serverTemps = `${server}/temperament`;
        const response2 = await axios(serverTemps);
        const data2 = response2.data
        return dispatch({
            type: GETTEMPS,
            payload: data2
        })
    }
}
/* Create a new dog into the DB */
export const createDog = async (state) => {
    try{
        let newDogInServer = `${server}/dogs`
        await axios.post(newDogInServer, state)
        return window.alert(`The dog ${state.name} has been created`)
    }
    catch{
        return window.alert('Error in the process')
    }
}
/* Get especific page */
export const showEspPage = (page) => { return { type: SHOWPAGE, payload: page } }
/* Get pages */
export const getPages = () => { return { type: PAGES } }
/* Bring dog details */
export const bringDogDetails = (id) => { return { type: DOG, payload: id } }
/* Search by Name */
export const search = (name) => { return { type: SEARCH, payload: name } }
/* Filter by */
export const filterBy = (arg) => { return { type: FILTER, payload: arg } }
/* Order descendent (A-Z) */
export const orderD = () => { return { type: ORDERD } }
/* Order Ascendent (Z-A) */
export const orderA = () => { return { type: ORDERA } }
/* Order heavy to light */
export const orderHeavy = () => { return { type: HEAVY } }
/* Order light to heavy */
export const orderLight = () => { return { type: LIGHT } }