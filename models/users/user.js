const crypto = require("crypto");
const DB = require("../../configs/database");

// eslint-disable-next-line consistent-return
const getUsers = async () => {
    return await DB.users.find({});
};

// eslint-disable-next-line consistent-return
const createUser = async (payload) => {
    let user = await DB.users.findOne({email: payload.email});
    const token = (new Date()).valueOf().toString() + (Math.random()*Math.random()).toString();
    if (!user) {
        user = {
            name: payload.name,
            email: payload.email
        };
        user.token = crypto.createHash('sha1').update(token).digest('hex');
        user = new DB.users(user);

        await user.save();
    } else {
        return Promise.reject(new Error("Email already exists!"));
    }
    return user;
};


// eslint-disable-next-line consistent-return
const getUserDetails = async (payload) => {
    return await DB.users.findOne({ _id: payload.user_id });
};

// eslint-disable-next-line consistent-return
const updateUser = async (payload) => {
    let user = await DB.users.findOne({ _id: payload.user_id });
    const token = (new Date()).valueOf().toString() + (Math.random() * Math.random()).toString();
    if (user) {
        user = {
            name: payload.name,
            email: payload.email
        };
        user.token = crypto.createHash('sha1').update(token).digest('hex');
        await user.save();
    } else {
        return Promise.reject(new Error("Cant find user!"));
    }
    return user;
};

// eslint-disable-next-line consistent-return
const deleteUser = async (payload) => {
    return await DB.users.findOneAndRemove({ _id: payload.user_id });
};

module.exports = {
    // eslint-disable-next-line object-shorthand
    getUsers: getUsers,
    // eslint-disable-next-line object-shorthand
    createUser: createUser,
    // eslint-disable-next-line object-shorthand
    getUserDetails: getUserDetails,
    // eslint-disable-next-line object-shorthand
    updateUser: updateUser,
    // eslint-disable-next-line object-shorthand
    deleteUser: deleteUser
};
