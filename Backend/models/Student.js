//This is the model like a class for student
//It contains all the properties and methods of Student.
//Need mongoose and schema init
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name:{
        type : String,
        required : true
    },

    age:{
        type : Number,
        required : true
    },

    gender:{
        type : String,
        required : true
    }
})

//"Student is the table / documents in mongodb database"
const Student = mongoose.model("Student", studentSchema);


module.exports = Student;