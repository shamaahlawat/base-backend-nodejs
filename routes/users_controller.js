const express = require('express');
const passport = require("passport");

const router = express.Router();

const User = require("../models/users/user");

router.get('', async (req, res) => {
    try {
        const users = await User.getUsers();
        res.send({ data: users, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.post('', async (req, res) => {
    try {
        const user = await User.createUser(req);
        res.send({ data: user, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.get('/:user_id', async (req, res) => {
    try {
        req.user_id = req.params.user_id;
        const user = await User.getUserDetails(req);
        res.send({ data: user, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.put('/:user_id', async (req, res) => {
    try {
        req.user_id = req.params.user_id;
        const user = await User.updateUser(req);
        res.send({ data: user, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

router.delete('/:user_id', async (req, res) => {
    try {
        req.user_id = req.params.user_id;
        const user = await User.deleteUser(req);
        res.send({ data: user, success: true });
    } catch (err) {
        res.status(400);
        res.send({ data: err });
    }
});

module.exports = router;
