const { Post } = require('../models');

const postData = [
    {
        post_title: "Dark mode works faster",
        post_content: "I'm not sure if anyone else has noticed this, but if your computer and apps are set to dark mode, it allows you to code faster.",
        user_id: 1
    },
    {
        post_title: "MVC isn't necessary",
        post_content: "I don't know why people like MVC file structure so much, you can just have it all in whatever folder and just remember.",
        user_id: 2
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;