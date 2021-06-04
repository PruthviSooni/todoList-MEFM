const { compareSync } = require('bcrypt');
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
};
const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },
    isDone: {
        type: Boolean,
        required: true
    },

}, schemaOptions);

module.exports = mongoose.model('todoList', todoSchema)