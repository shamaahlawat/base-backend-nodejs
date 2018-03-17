const DB = require("../../configs/database");

// eslint-disable-next-line consistent-return
const getPosts = async (payload) => {
    let params = {};
    if (payload.user_id) {
        params.user_id = payload.user_id;
    }
    return await DB.posts.find(params);
};

// eslint-disable-next-line consistent-return
const createPost = async (payload) => {
    let post = {
        title: payload.title,
        user_id: payload.user_id,
        description: payload.description,
        picture: payload.picture
    };
    return await new DB.posts(post);
};


// eslint-disable-next-line consistent-return
const getPostDetails = async (payload) => {
    return await DB.posts.findOne({ _id: payload.post_id });
};

// eslint-disable-next-line consistent-return
const updatePost = async (payload) => {
    let post = await DB.posts.findOne({ _id: payload.post_id });
    if (post) {
        post = {
            title: payload.title,
            description: payload.description,
            picture: payload.picture
        };
        await post.save();
    } else {
        return Promise.reject(new Error("Cant find post!"));
    }
    return post;
};

// eslint-disable-next-line consistent-return
const deletePost = async (payload) => {
    return await DB.posts.findOneAndRemove({ _id: payload.post_id });
};

module.exports = {
    // eslint-disable-next-line object-shorthand
    getPosts: getPosts,
    // eslint-disable-next-line object-shorthand
    createPost: createPost,
    // eslint-disable-next-line object-shorthand
    getPostDetails: getPostDetails,
    // eslint-disable-next-line object-shorthand
    updatePost: updatePost,
    // eslint-disable-next-line object-shorthand
    deletePost: deletePost
};
