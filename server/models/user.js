var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{Value} is not a valid email'
        }
    },
    password: {
        type: string,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: string,
            required: true
        },
        token: {
            type: string,
            require: true
        }
    }]
});

module.exports = {User};