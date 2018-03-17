const DB = require("../configs/database");
const crypto = require("crypto");

const init = async () => {
    await createUsers();
};

const createUsers = async () => {
    const users = [
        {
            name: "John Doe",
            email: 'johndoe@gmail.com',
            token: crypto.createHash('sha1').update((new Date()).valueOf().toString() + (Math.random() * Math.random()).toString()).digest('hex')
        },
        {
            name: "Nicolas Honai",
            email: 'nichonai@gmail.com',
            token: crypto.createHash('sha1').update((new Date()).valueOf().toString() + (Math.random() * Math.random()).toString()).digest('hex')
        },
    ];
    await DB.users.insertMany(users);
};

module.exports = {
    init
};
