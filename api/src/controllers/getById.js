const {Dog, Temperament} = require('../db');
const axios = require('axios');
const {
    YOUR_API_KEY,
  } = process.env;

const dogApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key={${YOUR_API_KEY}}`);

async function getById (req, res, next) {
    
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

module.exports = {
    getById,
};