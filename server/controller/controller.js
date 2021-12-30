// var userDB=require('../model/model');
var slotDB=require('../model/model');
//create and save new user
// exports.createUser=(req,res)=>{
//    if(!req.body){
//        res.status(400).send({message: "Content can not be empty"});
//        return;
//    }
//    console.log('hey making user');
//    //new user
//    const user = new userDB({
//        name:req.body.name,
//        enrollmentNumber:req.body.enrollmentNumber,
//        designation:req.body.designation,
//        collegeName:req.body.collegeName,
//        email:req.body.email,
//        gender:req.body.gender,
//        userType:req.body.userType,
//        profileUrl:req.body.profileUrl,
//        linkedinUrl:req.body.linkedinUrl,
//        githubProfileUrl:req.body.githubProfileUrl,
//        totalCount:0,
//    });

//   console.log('hey saving data');
//    //save user in database
//    user
//       .save(user)
//       .then(data=>{
//           console.log('sending data');
//           res.send(data);
//           console.log(data+'data sent ');
//       })
//       .catch(err=>{
//           res.status(500).send({
//               message:err.message||"some error occured while creating data"
//           });
//       });
// }

//retrieve and return all users/ retrieve and return a single user
// exports.find= (req,res)=>{
// userDB.find()
// .then(user=>{
//     res.send(user)
// })
// .catch(err=>{
//     res.status(500).send({message:err.message|| "Error Occured"})
// })
// }

// //update a new identified user by user id
// exports.update=(req,res)=>{

// }




//slots---
//createSlot
exports.createSlot=(req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }
    console.log('hey making slot');
    //new Slot
    const slot = new slotDB({
        candidateId:req.body.candidateId,
        interviewerId:req.body.interviewerId,
        date:req.body.date,
        startTime:req.body.startTime,
        duration:req.body.duration,
        meetUrl:req.body.meetUrl,
        status:req.body.status,
    });
 
   console.log('hey saving data');
    //save user in database
    slot
       .save(slot)
       .then(data=>{
           res.send(data);
       })
       .catch(err=>{
           res.status(500).send({
               message:err.message||"some error occured while creating data"
           });
       });
 }


 exports.findSlot= (req,res)=>{
    slotDB.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message|| "Error Occured"})
    })
}