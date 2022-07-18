const {Router} = require('express');
const { getAllDogs } = require('../controllers/getAllDogs');
const { getById } = require('../controllers/getById');
const { addDogs } = require('../controllers/addDogs');

const router = Router();

router.get('/', getAllDogs);
router.get('/:idDog', getById);
router.post('/', addDogs);

module.exports= router;