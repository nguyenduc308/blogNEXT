const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        index: true,
        lowerCase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowerCase: true
    },
    profile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, {
    timestamps: true
})
userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10)
            .then(salt => {
                return bcrypt.hash(user.password, salt)
            })
            .then(hash => {
                user.password = hash;
                return next();
            })
            .catch(err => Promise.reject({error: 'Server error'}))
})

const User = mongoose.model('User', userSchema, 'users');

module.exports = {
    User
}