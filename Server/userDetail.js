const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: {type: String, unique: true},
        password: String,
        role : {type: Number, unique: true}, // 0 : ADmin , 1 : user
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", userDetailsSchema);