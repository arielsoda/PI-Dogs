const reducerDogs = {
    getDogs: (state, action) => {
        state.dogs = action.payload;
        state.auxiliar = action.payload;
        state.auxDogs = state.dogs.map(dog => dog);
    },
    showPage: (state, action) => {
        let show = state.pages[action.payload]
        state.pageToShow = show;
    },
    dog: (state, action) => {
        state.dog = action.payload;
    },
    pages: (state, action) => {
        state.pages = action.payload;
    },
    search: (state, action) => {
        state.dogs = action.payload;
        state.auxiliar = action.payload;
        state.auxDogs = state.dogs.map(dog => dog);
    },
    getTemp: (state, action) => {
        state.temperaments = action.payload;
    },
    filter: (state, action) => {
        const dogs = state.auxiliar.filter(dog => {
            if (action.payload.toLowerCase() === 'all') return dog
            if (action.payload.toLowerCase() === 'api' && dog.createdInDB=== undefined) return dog
            if (action.payload.toLowerCase() === 'data base' && dog.createdInDB === true) return dog
            if (dog.temperament && dog.temperament.includes(action.payload)) return dog
            return null
        }
        )
        state.dogs = dogs;
    },
    orderAA: (state, action) => {
        const dogs = state.auxDogs.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            return 0;
        }
        )
        state.dogs = dogs;
    },
    orderDD: (state, action) => {
        const dogs = state.auxDogs.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
        }
        )
        state.dogs = dogs;
    },
    light: (state, action) => {
        const dogs = state.auxDogs.sort((prev, post) => {
            let lighterL = Math.round(prev.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
            let heavierL = Math.round(post.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
            return lighterL - heavierL
        })
        state.dogs = dogs;
    },
    heavy: (state, action) => {
        const dogs = state.auxDogs.sort((prev, post) => {
            let lighterH = Math.round(prev.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
            let heavierH = Math.round(post.weight.split('-').reduce((previ, poste) => parseInt(previ) + parseInt(poste) / 2))
            return heavierH - lighterH
        })
        state.dogs = dogs;
    }
};

export default reducerDogs;