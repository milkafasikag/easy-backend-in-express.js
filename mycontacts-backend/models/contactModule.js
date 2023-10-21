const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'add contact name '],
    },
    email:{
        type:String,
        required:[true,'add email address']
    },
    phone:{
        type:String,
        required: [true , 'add phone no ']
    },
},{
    timeStamps:true ,
});
module.exports = mongoose.model('contact', contactSchema);