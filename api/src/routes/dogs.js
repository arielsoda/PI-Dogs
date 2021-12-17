const {Router} = require('express');
const {getAllDogs, getDogForId, addDogs} = require('../controllers/dog');
const router = Router();

router.get('/', getAllDogs);
router.get('/:idDog', getDogForId);
router.post('/', addDogs);

module.exports= router;