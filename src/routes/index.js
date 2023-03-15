const jokesRoutes = require('./jokeRoutes');
module.exports = (app) =>{
    app.use(jokesRoutes);
}