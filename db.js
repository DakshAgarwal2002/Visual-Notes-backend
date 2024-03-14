const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://dakshagarwal:27June2002@cluster0.z1sufr5.mongodb.net/visual_notes"

const connectToMongo =async ()=>{
    await mongoose.connect(mongoURI)
}

module.exports = connectToMongo;