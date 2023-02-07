const router = require('express').Router();
const foodRoutes = require('./food&travel-routes');
const videogameRoutes = require('./videogames-routes');
const lfgRoutes = require('./lfg-routes');
const movieRoutes = require('./movies&tv-routes');
const musicRoutes = require('./music-routes');
const technologyRoutes = require('./technology-routes');
const userRoutes = require('./user-route');
const comment = require('./commentsRoutes')

router.use('/food-and-travel', foodRoutes);
router.use('/video-games', videogameRoutes);
router.use('/lfg', lfgRoutes);
router.use('/movies-and-television', movieRoutes);
router.use('/music', musicRoutes);
router.use('/technology', technologyRoutes);
router.use('/users', userRoutes);
router.use('/comment', comment)

module.exports = router;