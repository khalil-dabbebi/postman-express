const mongoose = require ('mongoose');

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://admin:khalil12345@cluster0.p2jmb.mongodb.net/contactDatabase?retryWrites=true&w=majority&appName=Cluster0');
        console.log ('une are connected to your database');
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDb;