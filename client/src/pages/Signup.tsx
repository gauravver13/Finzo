import { useState } from "react";
import { Heading } from "../components/Header";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
            firstName,
            lastName,
            email,
            username,
            password
        })
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        
        navigate("/dashboard");
        // Create a cool landing page!!
        
    }


    return (
        <> 
            <div className="h-screen bg-slate-300 flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
                        <Heading label={"Sign up"} />
                        <SubHeading label={"Enter your infromation to create an account"} />

                        <InputBox onChange={(e) => {
                        setFirstName(e.target.value);
                        }} placeholder="John" label={"First Name"} />
                        <InputBox onChange={(e) => {
                        setLastName(e.target.value);
                        }} placeholder="John" label={"Last Name"} />
                        <InputBox onChange={(e) => {
                        setEmail(e.target.value);
                        }} placeholder="abc123@gmail.com" label={"Email"} />
                        <InputBox onChange={(e) => {
                        setUsername(e.target.value);
                        }} placeholder="iamjohn" label={"username"} />
                        <InputBox onChange={(e) => {
                        setpassword(e.target.value);
                        }} placeholder="xxxxxxxx" label={"Password"} />

                        <div className="pt-4">
                            <Button label={"Sign up"} onClick={handleSubmit} />
                        </div>
                        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                    </div>
                </div>
            </div>

        </>
    )
}