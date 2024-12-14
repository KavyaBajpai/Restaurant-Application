import mongoose from "mongoose";

export const dbConnect = async() => {

   await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "RESTAURANT_APP"
    }).then( () => {
        console.log("Connected to database successfully!")
    })
    .catch( (err)  => {
        console.log(`Some error occured while connecting the database! ${err} `)
    })
}