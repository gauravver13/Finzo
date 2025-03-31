import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import axios from "axios";

interface User {
    _id?: string;
    firstName: string;
    lastName: string;
}

export const Users = () => {
    const [users, setUsers] = useState(user);
    const [filter, setFilter] = useState("");

    // remove it later
    const filteredUsers = users.filter(user => 
        user.firstName.toLowerCase().includes(filter.toLowerCase()) ||
        user.lastName.toLowerCase().includes(filter.toLowerCase())
    ); 

// add a useEffect to fetch users from the api, DEBOUNCE THE API CALL
    useEffect(() => {
        // implement this:
        // axios.get("http://localhost:5000/api/v1/user/bulk")
        //     .then((res) => {
        //         setUsers(res.data.user);
        //     })  
    }, [filter])
    return (
        <>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input onChange={(e) =>{
                    setFilter(e.target.value);
                }} placeholder={"Search Users..."} type="text"
                className="w-full px-2 py-2 border rounded border-slate-200"></input>
            </div>
            <div>
                {/* {users.map(user => <User user={user} />)} */}
                {filteredUsers.map((user, index) => (
                    <User key={index} user={user} />
                ))}
            </div>
        </>
    )
}


const user: User[] = [
    {
        _id: "1",
        firstName: "John",
        lastName: "Doe",
    },
    {
        _id: "2",
        firstName: "Divya",
        lastName: "Doe",
    },
    {   _id: "3",
        firstName: "Abhishek",
        lastName: "Smith",
    },
    {
        _id: "4",
        firstName: "Steve",
        lastName: "Smith",
    },
    {
        _id: "5",
        firstName: "Russel",
        lastName: "Doe",
    },
]

function User({user}: {user: User }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-between">
                <div className="flex">
                    <div className="rounded-full h-12 w-12 flex bg-slate-200 justify-center mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full text-xl">
                            {user.firstName[0]}
                        </div>
                    </div>
                    <div className="">{user.firstName}</div>
                </div>

                <div className="flex flex-col justify-center h-full">
                    <Button onClick={() => {
                        navigate("/send?id=" + user._id + "&name=" + user.firstName);
                    }} label={"send Money"} />
                </div>
            </div>
        </>
    )
}