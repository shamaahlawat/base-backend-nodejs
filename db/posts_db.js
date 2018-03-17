// eslint-disable-next-line prefer-destructuring
const mongoose = require("./__connection").mongoose;

const {Schema} = mongoose;

const posts = Schema({
    user_id: {type: Schema.ObjectId},
    title: {type: String},
    description: {type: String},
    picture: {type: String},
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports =  mongoose.model('posts', posts);
exports =  mongoose.model('posts', posts);
