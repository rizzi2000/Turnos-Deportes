import { HTTPSTATUS } from "../model/httpStatus.enum";

// T es un tipo generico
export abstract class CustomReponse<T> {
    statusCode: HTTPSTATUS; 
    data: T;
    constructor(
        statusCode: HTTPSTATUS, data: T
    ){
        this.statusCode = statusCode;
        this.data = data;
    }
}

export class ResponseOk<T> extends CustomReponse<T> {
    constructor(data: T){
        super(HTTPSTATUS.OK, data);
    }
}

export class ResponseCreated<T> extends CustomReponse<T> {
    constructor(data: T){
        super(HTTPSTATUS.CREATED, data);
    }
}