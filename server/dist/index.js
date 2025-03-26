"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./utils/db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // this can be modified!!
// DB Connection
(0, db_1.default)().then(() => {
    console.log("MongoDB Connected...");
}).catch((error) => {
    console.error(`Error MESSAGE: ${error.message}`);
    console.error(`Database Connection failed: ${error}`);
    process.exit(1);
});
// imported Routes
const user_routes_1 = __importDefault(require("./routes/user.routes"));
// declared Routes:
app.use("/api/v1/user", user_routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
