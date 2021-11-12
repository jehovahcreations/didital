var mongoose = require('mongoose');
var Schema = mongoose.Schema;

dataSchema = new Schema({

        name: String,
        vid: String,
        gender: String,
        dob: String,
        data: String,
        father: String,
        mother: String,
        sub: {
            type: Number,
            default: 1
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }),
    Data = mongoose.model('Data', dataSchema);

module.exports = Data;