const { User } = require('../models');

const userData = [
    {
        username: "maggie_lizards",
        password: "password124"
    },
    {
        username: "roses_arent_red25",
        password: "password125"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;