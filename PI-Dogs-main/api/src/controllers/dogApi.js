const axios = require('axios');
const {
    YOUR_API_KEY,
  } = process.env;

function dogApi(next) {
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key={b0c534f8-9311-4b50-b4cd-80c896bdfb5a}`)
    .then(r => {
        let dogsRes = r;
        dogsRes.data.map((d) => {
            return {
                id: d.id,
                image:d.image.url,
                name:d.name,
                weight:d.weight.metric,
                height:d.height.imperial,
                life_span: d.life_span,
                temperament: d.temperament,
               }})

    })
    .catch(e=>{
        next(e)
    })
};

module.exports = {
    dogApi,
};