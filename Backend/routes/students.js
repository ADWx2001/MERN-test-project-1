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
    
})

module.exports = router;