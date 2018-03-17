const posts = require("../db/posts_db");
const users = require("../db/users_db");

module.exports = {
    // eslint-disable-next-line object-shorthand
    posts: posts,
    // eslint-disable-next-line object-shorthand
    users: users
};
