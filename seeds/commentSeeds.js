const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Are you the type of person that also thinks flames on a car make it faster?",
        post_id: 1,
        user_id: 2
    },
    {
        comment_text: "I bet your house is halfway to being on Hoarders",
        post_id: 2,
        user_id: 1
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;