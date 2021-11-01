var mongoose = require('mongoose');
var Schema = mongoose.Schema;

dataSchema = new Schema({

        name: String,
        vid: String,
        gender: String,
        dob: String,
        data: String
    }),
    Data = mongoose.model('Data', dataSchema);

module.exports = Data;