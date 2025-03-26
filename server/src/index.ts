import express from "express";
import connectDB from "./utils/db";

const app = express();


// DB Connection
connectDB().then(() => {
    console.log("MongoDB Connected...");
}).catch((error: any) => {
    console.error(`Error MESSAGE: ${error.message}`);
    console.error(`Database Connection failed: ${error}`);
    process.exit(1);
});


// Export this in different folder called routes
// Routes::

app.post("/signup", (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    // Check if the user already exists
    // Create a new user
    // Generate a JWT token
    // Send the token to the user
    // Return the user

    
});

app.post("/signin", (req, res) => {
    const { email, password } = req.body;
    // Check if the user exists
    // Generate a JWT token
    // Send the token to the user
    // Return the user

});

app.patch("/user:id", (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    // Check if the user exists
    // Update the user
    // Return the updated user
});



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});