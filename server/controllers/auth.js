const { User }  = require('../models/user');
const shortId = require('shortid');
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const expressJwt = require('express-jwt')
exports.signUp = (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({email})
        .then(user => {
            if(user) {
                return res.status(400).json({error: 'Email is taken'})
            }
            let username = shortId.generate();
            let profile = `${process.env.CLIENT_URL}/profile/${username}`
            let newUser = new User({name, email, password, username, profile})
            newUser.save()
                .then(user => {
                    res.status(201).json({msg: "Sign up success", user})
                })
                .catch(err => {
                    res.status(500).json({error: err})
                })
        })
}
exports.signIn = (req, res) => {
    const { email, password } = req.body;
    let user;
    User.findOne({email})
        .then(_user => {
            if(!_user) res.status(400).json({error: "Email does not exist. Please sign up"})
            user = _.pick(_user, ["_id", "username", "id", "name", "role", "email"])
            return bcrypt.compare(password, _user.password)
        })
        .then(isMatch => {
            if(!isMatch) res.status(400).json({error: 'Email or Password do not match'})
            const payload = {_id: user._id}
            return jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn: '1d'}
            )
        })
        .then(token => {
            res.cookie('token', token, {expiresIn: '1d' });
            res.status(200).json({
                token,
                user
            })
        })
        .catch(err => res.status(500).json({error: "Server error"}))
}

exports.signOut = (req, res) => {
    res.clearCookie('token')
    res.status(204)
}

exports.requrieSignIn = expressJwt({
    secret: process.env.JWT_SECRET,
})
exports.authenticate = (req, res, next) => {
    const authUserId = req.user._id;
    User.findById(authUserId)
        .then(user => {
            if(!user) res.status(400).json({error: "Auth error"})
            req.profile = user;
            return next()
        })
        .catch(err => res.status(500).json({error: "server error"}))
}
exports.authorize = (req, res, next) => {
    const authUserId = req.user._id;
    User.findById(authUserId)
        .then(user => {
            if(!user) res.status(400).json({error: "Auth error"})
            if(user.role !== 1) res.status(400).json({error: "Auth error"})
            return next()
        })
        .catch(err => res.status(500).json({error: "server error"}))
}
