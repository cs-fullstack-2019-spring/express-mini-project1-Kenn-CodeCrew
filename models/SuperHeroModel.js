var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SuperHeroSchema = new Schema({
    id: Number,
    name: String,
    powers: {
        intelligence: Number,
        combat: Number,
        wealth: Number,
        strength: Number,
        speed: Number,
    },
    image: String,
});

module.exports = mongoose.model('GoodPerson', SuperHeroSchema);