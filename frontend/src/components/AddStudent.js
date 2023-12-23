import React,{useState} from "react";

export default function AddStudent(){

    const [name, setName] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");

    return(
        <div className="container">
            <form>
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