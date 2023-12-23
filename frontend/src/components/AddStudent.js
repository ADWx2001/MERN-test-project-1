import React,{useState} from "react";
import axios from "axios";

export default function AddStudent(){

    const [name, setName] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");

    function sendData(e){
        e.preventDefault();
        alert("inserted");

        const newStudent={
            name,age,gender
        }

        console.log(newStudent);

        axios.post("http://localhost:3000/student/add",newStudent).then(()=>{
            alert("Student aded")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>
                <div class="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    onChange={(event)=>{
                        setName(event.target.value);
                    }}
                    ></input>

                </div>
                <div class="form-group">
                <   label for="age">Student Age</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    onChange={(event)=>{
                        setage(event.target.value);
                    }}
                    ></input>

                </div>

                <div class="form-group">
                <   label for="gender">Student Gender</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    onChange={(event)=>{
                        setgender(event.target.value);
                    }}
                    ></input>

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}