const express = require('express');

const router = express.Router();
const Posts = require("../models/posts/post");

router.get('', async (req, res) => {
    try {
        const posts = await Posts.getPosts(req);
        res.send({ data: posts, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.post('', async (req, res) => {
    try {
        const post = await Posts.createPost(req);
        res.send({ data: post, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.get('/:post_id', async (req, res) => {
    try {
        req.post_id = req.params.post_id;
        const post = await Posts.getPostDetails(req);
        res.send({ data: post, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.put('/:post_id', async (req, res) => {
    try {
        req.post_id = req.params.post_id;
        const post = await Posts.updatePost(req);
        res.send({ data: post, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.delete('/:post_id', async (req, res) => {
    try {
        req.post_id = req.params.post_id;
        const post = await Posts.deletePost(req);
        res.send({ data: post, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});


module.exports = router;
