const {Router} = require('express');
const {getAllTemperament} = require('../controllers/temperament');
const router = Router();

router.get('/', getAllTemperament);

module.exports= router;