const mongoose= require('mongoose');
const { dashboard } = require('../services/render');

var userAbhi= new mongoose.Schema({
    name:{ type : String, required : true},
    enrollmentNumber:{type:String},
    designation:{ type: String},
    collegeName:{ type: String},
    email:{ type:String, required:true, unique: true},
    gender:{ type:String},
    userType:{ type:String},
    profileUrl:{ Type:String},
    linkedinUrl:{type:String},
    githubProfileUrl:{ type: String},
    totalCount:{ type:Number },
    upcoming:{ type:[String]},
    history:{type:[String]}
})

var slotAbhi = new mongoose.Schema({
    candidateId:{ type:String},
    interviewerId:{ type:String},
    date:{ type:String},
    startTime:{ type:Number},
    duration:{ type:Number},
    meetUrl:{ type:String},
    status:{ type:Boolean}
})

// var userTest = new mongoose.Schema({
//     name:String,
//     class:String
// })


// const userDB = mongoose.model('userdb',userAbhi)
const slotDB = mongoose.model('userdb',slotAbhi)

// module.exports=userDB
module.exports=slotDB