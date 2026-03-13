const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({

    email:{
        type:String,
        require:true,
        unique:true,
    },
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:new Date(),
    },
});

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password,12);
})

module.exports = mongoose.model("user",userSchema);