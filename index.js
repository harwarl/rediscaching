const express = require('express');
const config = require('./src/utils/config');
const bodyParser = require('body-parser');
const bootStrap = require('./src/routes/index');
require('./src/utils/cacheManager');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req, res, next)=>{
    res.send('Using redis to cache');
})

bootStrap(app);

app.use('*', (req, res, next)=>{
    res.send('Seems you lost your way')
})

app.listen(config.PORT, ()=>{
    console.log(`App is running on port ${config.PORT}`);
});