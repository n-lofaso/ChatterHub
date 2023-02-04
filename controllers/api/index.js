const router = require('express').Router();
const userRoutes = require('./user-route');
const musicRoutes = require('./music-routes');
const technologyRoutes = require('./technology-routes');
const foodAndTravel = requre('./food&travel-routes');
const moviesAndTv = require('./movies&tv-routes');
const lfg = require('./lfg-routes');
const videogames = require('./videogames-routes');

// All end points for the api
router.use('/user', userRoutes);
router.use('/music', musicRoutes);
router.use('/technology', technologyRoutes);
router.use('/food-and-travel', foodAndTravel);
router.use('/movies-and-tv', moviesAndTv);
router.use('/LFG', lfg);
router.use('/videgames', videogames)




module.exports = router;