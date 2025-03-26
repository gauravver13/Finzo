import express from "express";
import connectDB from "./db";

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

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});