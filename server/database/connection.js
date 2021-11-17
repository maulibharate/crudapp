const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false
        })
            console.log(`DB connection successful!!`);
        } catch(error) {z
            console.log(`no connection ${error}`)
        };
    }

module.exports = connectDB;