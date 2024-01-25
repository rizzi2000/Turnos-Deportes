import { Response } from "express";
import { CustomReponse } from "./customResponse";

// recibe el objeto response de express y una custom response que contiene status y data
const ResponseHandler = (res: Response, httpResponse: CustomReponse<unknown>) => {
    const { statusCode, data } = httpResponse;

    return res.status(statusCode).json({
        data
    });
}

export default ResponseHandler;