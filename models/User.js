const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is Required',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email is Required',
            match: [/.+@.+\..+/]
        },
        thoughts: [ThoughtsSchema],
        friends: [FriendsSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;