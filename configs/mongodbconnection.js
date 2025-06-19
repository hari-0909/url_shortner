const mongoose = require('mongoose');
const connectdb = async () => {
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/urlshortener', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}
module.exports = connectdb;