const mongoose = require("mongoose");
const DATABASE = process.env.DATABASE || 'mongodb+srv://jack:jack@cluster0.txbbl.mongodb.net/CRUD?retryWrites=true&w=majority'
const connectDB = async () => {
    try {
        mongoose.connect(DATABASE, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })
            console.log(`DB connection successful!!`);
        } catch(error) {
            console.log(`no connection ${error}`)
        };
    }

module.exports = connectDB;