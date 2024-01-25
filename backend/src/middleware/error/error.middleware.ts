import { NextFunction, Request, Response } from "express";
import { HTTPSTATUS } from "../../model/httpStatus.enum";

// captura el error y retorna su status (si hay, si no 500) y su mensaje;
function errorHandler(error: Error, _req:Request, res:Response, _next:NextFunction){
    let statusCode = getStatusCode(error);
    let { message } = error;

    return res.status(statusCode).json({
        error: message 
    });
}

// si existe error.status lo retorna si no por defecto un 500;
function getStatusCode(error: Error): HTTPSTATUS{
    if ("status" in error) 
        return error.status as HTTPSTATUS;

    return HTTPSTATUS.INTERNAL_SERVER_ERROR;
}

export default errorHandler;