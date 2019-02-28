const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
//handle company location status profession
//referral date
const ProfileSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max : 40
    },
    company : {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    profession : {
        type: String, 
        required :true
    },
    referral :{
        type : String,
        required : true 
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);