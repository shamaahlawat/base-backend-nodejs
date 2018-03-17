// eslint-disable-next-line prefer-destructuring
const mongoose = require("./__connection").mongoose;

const {Schema} = mongoose;

const user = Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: true},
    token: {type: String, required: true, index: true},
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports =  mongoose.model('users', user);
exports =  mongoose.model('users', user);
