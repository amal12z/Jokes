const Joke = require('../models/Jokes.model');

//  Export a function to get all Jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes , NumOfJokes : allJokes.length , success : true})) 
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// Export a function to get a single joke
module.exports.findOneSingleJokeById = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
        console.log(req.params.id)
}


// // random
// // Function to get a random joke
// module.exports.findRandomJoke = (req, res) => {
//     Joke.find({ _id: req.params.id })
//         .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
//         console.log(req.params.id)
// }





// Export a function to create a joke
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
        console.log(req.body)
}


// Export a function to update a joke
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true } // ??
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// Export a function to delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
    // OR : const {id} =req.params;
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
        console.log(req.params.id) 
}
