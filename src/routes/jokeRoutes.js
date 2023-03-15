const jokeController = require('./../controllers/jokes');
const router = require('express').Router();

router.get('/jokes/random', jokeController.getRandomJoke);
router.get('/jokes/categories', jokeController.getJokeCategories);

module.exports = router;
