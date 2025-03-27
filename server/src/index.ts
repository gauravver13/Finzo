import express from "express";
import connectDB from "./utils/db";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors()) // this can be modified!!



// DB Connection
connectDB().then(() => {
    console.log("MongoDB Connected...");
}).catch((error: any) => {
    console.error(`Error MESSAGE: ${error.message}`);
    console.error(`Database Connection failed: ${error}`);
    process.exit(1);
});

import { authMiddleware } from "./middlewares/auth.middleware";


// imported Routes
import userRouter from "./routes/user.routes";
import accountRouter from "./routes/account.routes";

// declared Routes:
app.use("/api/v1/user", userRouter);
app.use("/api/v1/account", authMiddleware, accountRouter);



app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});