import { authMiddleware } from "../middlewares/auth.middleware";
import Account from "../models/Account.model";
import User from "../models/User.model";
import bcrypt from "bcryptjs";


const generateAccessAndRefreshTokens = async (userId: string) => {
    const user = await User.findById(userId) as any;
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    return { accessToken, refreshToken };
}


const signUp = async (req: any, res: any) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;

        if(!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const user = await User.findOne({
            $or: [ { email }, { username } ]
        });

        const hashedPassword = await bcrypt.hash(password, 10); 
        console.log(hashedPassword)

        if(user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword
        });

        const userId = newUser._id.toString();
        
        await Account.create({
            userId: userId,
            balance: 1+Math.random()*10000
        });

        console.log("New user created: ",newUser)
        return res.status(200).json({message: "User created successfully", newUser});
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
}

const signIn = async (req: any, res: any) => {
    try {
        const { username, email, password, } = req.body;


        // Improve this logic with username and emails
        if(!email || !password) {
            return res.status(400).json({ message: "Password and credentials are required" });
        }
        
        const user = await User.findOne({ 
            $or: [ { email }, { username } ]
         });

        if(!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id.toString());

        return res.status(200)
        .cookie("accessToken", accessToken)
        .cookie("refreshToken", refreshToken)
        .json({ accessToken, refreshToken, "User": user });
        
    } catch (error: any) {
        return res.send(400, { message: error.message });
    }
}

const updateUser = async (req: any, authMiddleware: any, res: any) => {
//     app.patch("/user:id", (req, res) => {
//     const { firstName, lastName, username, email, password } = req.body;
//     // Check if the user exists
//     // Update the user
//     // Return the updated user
//     });
    try {
        const { firstName, lastName, username, email, password } = req.body;
        const { id } = req.params;
        // make it tomm..

    } catch (error: any) {
        return res.status(500).json({ message: error.message });    
        
    }
}

// routes to get the users from the backend, preferably via firstName, lastName.
const bulkUsers = async (req: any, res: any) => {
    // 
}


export {
    signUp,
    signIn,
    updateUser,
    bulkUsers
}