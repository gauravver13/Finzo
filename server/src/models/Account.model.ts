import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
})

const Account = mongoose.model("Account", accountSchema);

export default Account;