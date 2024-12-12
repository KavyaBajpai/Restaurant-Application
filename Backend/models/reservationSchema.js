import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: 
    {
        type: String,
        required: true,
        minLength: [1, "First name should have atleast one character."],
        maxLength: [30, "First name cannot exceed 30 characters."]
    },

    lastName: 
    {
        type: String,
        required: true,
        minLength: [1, "Last name should have atleast one character."],
        maxLength: [30, "Last name cannot exceed 30 characters."]
    },

    email:
    {
        type: String,
        required: true,
        validator: [validator.isEmail, "Provide a valid email."]
    },

    phone:
    {
        type: String,
        required: true,
        minLength: [10, "Phone number should have only 10 digits"],
        maxLength: [10, "Phone number should have only 10 digits"]

    },

    time: 
    {
        type: String,
        required: true
    },

    date: 
    {
        type: String,
        required: true
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema)