const {Dog, Temperament} = require('../db');
const axios = require('axios');
const {
    YOUR_API_KEY,
  } = process.env;

const dogApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key={${YOUR_API_KEY}}`);




async function getAllDogs (req, res, next) {
    const dogDB = await Dog.findAll({include: Temperament});
    const {name} = req.query;
    Promise.all([dogApi, dogDB]) 
    .then((r)=>{
        let [dogApiRes, dogDBRes] = r;
        dogDBRes = dogDBRes.map((d) =>{
            return {
                id: d.id,
                image:d.image,
                name:d.name,
                weight:d.weight,
                height:d.height,
                life_span: d.life_span,
                temperament:d.dataValues.temperaments.map(t => t.name).join(', '),
                createdInDB: true
            };
        });
        dogApiRes = dogApiRes.data.map((d) => {
            return {
                id: d.id,
                image:d.image.url,
                name:d.name,
                weight:d.weight.metric,
                height:d.height.imperial,
                life_span: d.life_span,
                temperament: d.temperament
            }
        });
        allDogs = dogDBRes.concat(dogApiRes);
        if (!name) {
            return res.json(allDogs);
        }else{
            let dogSearch = allDogs.filter(d => {
                return d.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
            });
            if (dogSearch.length>0) {
                return res.json(dogSearch);
            }else{
                return res.status(404).json({ msg: "Dog not found" });
            }
        }
    })
    .catch((err)=> next(err));
};

async function getDogForId (req, res, next) {
    
    const {idDog} = req.params;
    if (!isNaN(idDog)){
        dogApi
        .then(r=>{
            let dogApiRes = r;
            let dar = dogApiRes.data.filter(d => {
                return d.id === parseInt(idDog);
            });
            if (dar.length > 0){
                return res.json(
                    dar.map((d) => {
                        return {
                            id: d.id,
                            image:d.image.url,
                            name:d.name,
                            weight:d.weight.metric,
                            height:d.height.imperial,
                            life_span: d.life_span,
                            temperament: d.temperament
                        }
                    })
                )
            }else{
                return res.status(404).json({ msg: "Dog not found" });
            }           
        })
        .catch((err)=> next(err));
    }else{
        const dogDB = await Dog.findAll({include: Temperament})
        .then(r=>{
            let dogDBRes = r;
            let ddbr = dogDBRes.filter(d =>{
                return d.id === idDog;
            });
            if(ddbr.length > 0) {
                return res.json(ddbr.map((d) =>{
                    return {
                        id: d.id,
                        image:d.image,
                        name:d.name,
                        weight:d.weight,
                        height:d.height,
                        life_span: d.life_span,
                        temperament:d.dataValues.temperaments.map(t => t.name).join(', '),
                        createdInDB: true
                    };
                }))
            }else{
                return res.status(404).json({ msg: "Dog not found" });
            }
        })
        .catch((err)=> next(err));
    }
};

async function addDogs (req, res, next) {
    const {name, minHeight, maxHeight, minWeight, maxWeight, minlife_span, maxlife_span, temperament} = req.body;
    let height = minHeight + ' - ' + maxHeight;
    let weight = minWeight + ' - ' + maxWeight;
    let life_span;
    if(minlife_span && maxlife_span && parseInt(minlife_span) <= parseInt(maxlife_span)) {
        life_span = minlife_span + ' - ' + maxlife_span;
    }else{
        life_span = 'Life span not declared';
    }

  let image ='https://para-perros.online/wp-content/uploads/2018/10/imagen-de-perro-gracioso-1.jpg#main'
  if(name && minWeight && maxWeight && minHeight && maxHeight ){
    try{
    const newDog = await Dog.create({
      name, 
      weight,
      height, 
      life_span,
      image,
    });
    if (temperament.length>1){
        temperament.map(async t=>{
            const newTemperament = await Temperament.findAll({where:{
                name:t
            }})
        await newDog.addTemperaments(newTemperament);
        })
        return res.json(newDog);
    }else{
        const newTemperament = await Temperament.findAll({where:{
            name:temperament
        }})
        await newDog.addTemperaments(newTemperament);
    return res.json(newDog);
    }
    }
    catch(e){
       next(e);
    }
  }
  else{
    return res.status(404).send({msg: "Faltan los valores basicos"})
  }
};




module.exports = {
    getAllDogs,
    getDogForId,
    addDogs,
};