const {Temperament} = require('../db');
const axios = require('axios');
const {
    YOUR_API_KEY,
  } = process.env;

async function getAllTemperament (req, res, next) {
  const temperamentApi = axios.get(`https://api.thedogapi.com/v1/breeds?api_key={${YOUR_API_KEY}}`)
  .then(async(r)=>{
    let arrTemp=[];
    let tempRes = r;
    let tRes = await tempRes.data.map(d => {
      if(d.temperament){
        return d.temperament;
      }
    }).join().split(',');
    tRes.map(d => {
      if(!arrTemp.includes(d.trim()) && d){
        arrTemp.push(d.trim());
      }
    });
    const tempNoRepeat= [...new Set(arrTemp)];
    tempNoRepeat.sort();
    tempNoRepeat.map(async(t)=>{
      await Temperament.findOrCreate(
        {
          where: { name: t}
        })
    });
    const allTemps = await Temperament.findAll();
    return res.json(allTemps)        
  })
  .catch((err)=> next(err));
};

module.exports = {
    getAllTemperament,
};