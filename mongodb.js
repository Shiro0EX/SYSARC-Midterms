<<<<<<< HEAD
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MONGODB CONNECTED");
    })


=======
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MONGODB CONNECTED");
    })
>>>>>>> 10d05f9b096a2b1c868ac8a1428aea61b77311d4
