const {Dog, Temperament} = require('../db');


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
    addDogs,
};