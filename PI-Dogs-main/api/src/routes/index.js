const { Router } = require('express');
// Importar todos los routers;
const DogRoutes = require('./dogs');
const TemperamentRoutes = require('./temperament');


const router = Router();

// Configurar los routers
router.use('/dogs', DogRoutes);
router.use('/temperament', TemperamentRoutes);


module.exports = router;
