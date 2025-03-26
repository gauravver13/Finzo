"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
// DB Connection
(0, db_1.default)().then(() => {
    console.log("MongoDB Connected...");
}).catch((error) => {
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
