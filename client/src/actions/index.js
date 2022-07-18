import axios from 'axios';
import { getDogs, showPage, dog, pages, search, getTemp, filter, orderAA, orderDD, light, heavy } from '../store/slice/index';

export const getDogsAsync = () => (dispatch) => {
    axios.get('/dogs').then(response => {
        dispatch(getDogs(response.data));
    }
    ).catch(error => {
        console.log(error);
    }
    );
};

export const bringTemperaments = () => (dispatch) => {
    axios.get('/temperament').then(response => {
        dispatch(getTemp(response.data));
    }
    ).catch(error => {
        console.log(error);
    }
    );
};

export const dogsByName = (name) => (dispatch) => {
    axios.get(`/dogs?name=${name}`).then(response => {
        dispatch(search(response.data));
    }
    ).catch(error => {
        console.log(error);
    }
    );
};

export const showEspPage = (page) => (dispatch) => {
    dispatch(showPage(page));
};

export const bringDogDetails = (id) => (dispatch) => {
    axios.get(`/dogs/${id}`).then(response => {
        dispatch(dog(response.data));
    }
    ).catch(error => {
        console.log(error);
    }
    );
};

export const getPages = (dogs) => (dispatch) => {
    let newPages = []
    for (let i = 0; i < dogs.length; i += 8) {
        let slice = dogs.slice(i, i + 8)
        newPages.push(slice)
        }
        dispatch(pages(newPages));
};

export const filterBy = (condition) => (dispatch) => {
    dispatch(filter(condition));
};

export const orderA = () => (dispatch) => {
    dispatch(orderAA());
};

export const orderD = () => (dispatch) => {
    dispatch(orderDD());
};

export const orderLight = () => (dispatch) => {
    dispatch(light());
};

export const orderHeavy = () => (dispatch) => {
    dispatch(heavy());
};

export const createDog = async (state) => {
    try{
        await axios.post('/dogs', state)
        return window.alert(`The dog ${state.name} has been created`)
    }
    catch{
        return window.alert('Error in the process')
    }
}