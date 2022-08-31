const JokeController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes); // IS DONE 
    app.get('/api/jokes/:id', JokeController.findOneSingleJokeById); // IS DONE 
    // app.get('/api/jokes/random', JokeController.without);
    app.post('/api/jokes/new', JokeController.createNewJoke); // IS DONE 
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke); // IS DONE
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke); // IS DONE

}