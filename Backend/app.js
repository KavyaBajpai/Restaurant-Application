import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./db_connect/db_connect.js";
import { ErrorMiddleware } from "./error/error.js";


const app = express()
dotenv.config( {path: "./config/config.env"} )

app.use( cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));


app.use( express.json )
app.use(express.urlencoded({extended: true, limit: "16kb"}))

dbConnect();

app.use( ErrorMiddleware )
export default app