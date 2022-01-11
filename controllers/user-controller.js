const { User, Thought } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
        Pizza.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // get a single user by its _id and populated thought and friend data
    getPizzaById({params}, res) {
        Pizza.findOne({ _id: params.id})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .selet('-__v')
            .then(dbUserData => res.json(dbPizzaData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // post a new user

    // update a user by its _id

    //  remove user by its _id

    // add a new friend to a user's friend list

    // remove a friend from a user's friend list
}