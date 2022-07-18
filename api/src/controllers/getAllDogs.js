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

module.exports = {
    getAllDogs,
};