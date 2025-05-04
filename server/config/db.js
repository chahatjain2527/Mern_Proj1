// const mongoose = require("mongoose");

// //const Db_Uri = "mongodb+srv://chahatj777:chahatj777@cluster0.7xjyema.mongodb.net/myCrud?retryWrites=true&w=majority&appName=Cluster0";
// const Db_Uri = "mongodb+srv://chahat123:chahat123@cluster0.swaok.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0";

// const connectDb = async()=>{
//     try {
//         await mongoose.connect(Db_Uri);
//         console.log("connected");
//     } catch (error) {
//         console.log("Error while connecting"+error.message);
//     }
// }

// module.exports = connectDb;

const mongoose = require("mongoose");
require('dotenv').config();

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDb;