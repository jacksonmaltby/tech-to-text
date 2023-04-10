const { User } = require('../models');

const userData = [
    {
        username: "maggie_lizards",
        email: "lizardqueen@aol.com",
        password: "password124"
    },
    {
        username: "roses_arent_red25",
        email: "magggles@hotmail.com",
        password: "password125"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;