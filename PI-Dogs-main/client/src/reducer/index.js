/* Action types */
import {
    DOG,
    FILTER,
    GETDOGS,
    GETTEMPS,
    HEAVY,
    LIGHT,
    ORDERA,
    ORDERD,
    PAGES,
    SEARCH,
    SHOWPAGE
} from '../actions/index'
/* State */
const initialState = {
    temperaments: [],
    dogs: [],
    auxFilter: [],
    dog: {},
    pages: [],
    pageToShow: []
}

/* life_span */

export default function rootReducer(state = initialState, { type, payload }) {
    let auxDogs = state.dogs.map(dog => dog)
    let auxiliar = state.auxFilter
    switch (type) {
        case GETDOGS: /* Bring dogs  */
            return {
                ...state,
                dogs: payload,
                auxFilter: payload
            }
        case GETTEMPS: /* Bring Temperaments */
            return {
                ...state,
                temperaments: payload
            }
        case PAGES:
            let newPages = []
            for (let i = 0; i < state.dogs.length; i += 8) { 
                let slice = state.dogs.slice(i, i + 8)
                newPages.push(slice)
            }
            return {
                ...state,
                pages: newPages
            }
        case SHOWPAGE:
            let show = state.pages[payload]
            return {
                ...state,
                pageToShow: show
            }
        case DOG: /* Card Description */
            const findDog = auxiliar.find(dog => {
                return dog.id === payload
            })
            return {
                ...state,
                dog: findDog
            }
        case SEARCH: /* Search dog by name */
            if (payload === '') {
                return /* state.dog; */ alert('insert name')
            }else{
                const dog = auxiliar.filter(dog => {
                
                return dog.name.toLowerCase().includes(payload.toLowerCase()) 
                /* {
                    return dog
                } */
            })
            if (!dog.length) return console.log('Dog not found', dog, auxiliar)
            return {
                ...state,
                dogs: dog,
                /* begin: 0 */
            }
            }
            
            
        case FILTER: // Filter dogs by specific condition
            const dogs = auxiliar.filter(dog => {
                if (payload.toLowerCase() === 'api' && dog.createdInDB=== undefined) return dog
                if (payload.toLowerCase() === 'data base' && dog.createdInDB === true) return dog
                if (dog.temperament && dog.temperament.includes(payload)) return dog
                console.log('payload', payload)
                console.log('PERROS', dog)
                return null
            }
            )/* .filter(Boolean) */
            console.log('PERROooooooS', dogs)
            return {
                ...state,
                dogs: dogs
            }
        case ORDERD: /* A-Z */
            const orderD = auxDogs.sort((prev, post) => {
                if (prev.name < post.name) return -1;
                else if (prev.name > post.name) return 1;
                else return 0
            });
            return {
                ...state,
                dogs: orderD,
            }
        case ORDERA: /* Z-A */
            const orderA = auxDogs.sort((prev, post) => {
                if (prev.name < post.name) return 1;
                else if (prev.name > post.name) return -1;
                else return 0
            });
            return {
                ...state,
                dogs: orderA,
            }
        case LIGHT: /* lighter to heavier */
            const orderLight = auxDogs.sort((prev, post) => {
                let lighterL = Math.round(prev.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                let heavierL = Math.round(post.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                return lighterL - heavierL
            })
            /* const orderLight =auxDogs.sort((prev, post) => {
                let lifemin = Math.round(prev.life_span.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                let lifemax = Math.round(post.life_span.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                return lifemin - lifemax
            }) */
            return {
                ...state,
                dogs: orderLight,
            }
        case HEAVY: /* heavier to lighter */
            const orderHeavy = auxDogs.sort((prev, post) => {
                let lighterH = Math.round(prev.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                let heavierH = Math.round(post.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
                return heavierH - lighterH
            })
            /* const orderHeavy = auxDogs.sort((prev, post) => {
                let lifemina = Math.round(prev.life_span.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste)) / 2)
                let lifemaxa = Math.round(post.life_span.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste)) / 2)
                return lifemaxa - lifemina
            }) */
            return {
                ...state,
                dogs: orderHeavy,
            }
        default:
            return state
    }
}