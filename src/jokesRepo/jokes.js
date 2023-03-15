const axios = require('axios');

const _axios = axios.create({
    baseURL: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes",
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': 'd09581ea63msh0bce1e9b496780fp11adf3jsn563f1f4f215b',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
})


exports.getRandomJoke = async () => {
    try {
        return{
            data: await _axios
                .get('/random')
        }
    } catch (error) {
        console.log(`Error ${error}`);
        return {error: error};
    }
}

exports.getCategories = async () =>{
    try{
        const data = await _axios.get('/categories')
        return{
            data: data.data
        }
    }catch(error){
        console.log(`Error ${error}`);
        return {error: error};
    }
}