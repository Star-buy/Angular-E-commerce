// const mongoose = require('mongoose');

// const starSchema = new mongoose.Schema({
//     name: {
//         title: String,
//         body:String,
//         image : String,
//         required: true
//     }
// });

module.exports = mongoose.model('star', starSchema);