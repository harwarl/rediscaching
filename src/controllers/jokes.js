const JokeService = require('./../jokesRepo/jokes');

exports.getRandomJoke = async (req, res, next) => {
    const {data, error} = await JokeService.getRandomJoke();
    if(error){
        return res.json(error);
    }
    return res.json(data.data.value);
}

exports.getJokeCategories = async (req, res, next) => {
    let categories = await cache.getAsync('joke-cat');
    console.log('category from cache', categories);

    if(categories) return res.json(JSON.parse(categories));
    
    const {data, error} = await JokeService.getCategories();
    if(error){
        return res.json(error);
    }
    let cat_response = await cache.setAsync('joke-cat', JSON.stringify(data));
    return res.json(data);
}