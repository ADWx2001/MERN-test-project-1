//This fie use to route to data between model class file and mongo db scema
const router = require("express").Router();

let Student = require("../models/Student");

//if https://localhost:8090/student.add
//Insert new student to databse
router.route("/add").post((req, res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Adding success")
    }).catch(()=>{
        console.log(err);
    })

})

//Get Student details from database

router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students);
    }).catch((err)=>{
        console.log(err)
    })
})

//update the student

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"User Updated", user:update}) //updated details front end pass at moment of successfull update
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error updating user data"});
    });  
})

//delete the student

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"User delete success"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"User delete not success", error: err.message});
    })

})

//find one person details by id

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Student.findById(userId).then((student)=>{
        res.status(200).send({status:"User Fetched",student})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Problem with fetching user ",error:err.message});
    })
})

module.exports = router;