import { useState } from "react"
import { Button } from "../components/Button"
import { Heading } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
    const [emailUsername, setEmailUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
            emailUsername,
            password})
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
    }
    return (
        <> 
        <div className="h-screen bg-slate-300 flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your infromation to sign in"} />
                    <InputBox onChange={(e) => {
                        setEmailUsername(e.target.value);
                    }} label={"Email/Username"} placeholder={"abc123@gmail.com"} />
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value);
                    }} label={"Password"} placeholder={"XXXXXXXX"}/>

                    <div className="pt-4">
                        <Button label={"Sign in"} onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}