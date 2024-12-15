import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js"

const sendReservation = async (req, res, next) => {

    const { firstName, lastName, email, date, time, phone } = req.body;
    if( !firstName || !lastName || !email || !phone || !time || !date )
    {
        return next( new ErrorHandler("Please fill all details.", 400) )
    }

    try
    {
        await Reservation.create( { firstName, lastName, email, date, time, phone } );
        res.status(200).json(
            {
                success: true,
                message: "Reservation made successfully."
            }
        );
    }

    catch ( error )
    {
        if(error.name === "ValidationError")
        {
            const validationErrors = Object.values( error.errors ).map( 
                (err) => err.message
             );

            return next( new ErrorHandler(validationErrors.join(","), 400 ))
        }
        return next (error)
    }
}

export default sendReservation;