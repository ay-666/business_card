const mongoose = require('mongoose');
require('dotenv').config({ path: '../key.env' });

const uri = process.env.MONGODB_URI;

mongoose.connect(uri);


const cardSchema =  mongoose.Schema({
    name: String,
    description: String,
    interests:[{
        type:String
    }
    ]
});

const Card = mongoose.model('Card',cardSchema);

module.exports = {
    Card
}