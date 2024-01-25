import { HTTPSTATUS } from "../model/httpStatus.enum";

export abstract class CustomError extends Error {
    status: HTTPSTATUS;
    constructor(message: string, status: HTTPSTATUS){
        super(message);
        this.status = status;
    }
}

export class BadRequestError extends CustomError {
    constructor(message: string){
        super(message, HTTPSTATUS.BAD_REQUEST);
    }
}
export class UnathrorizedError extends CustomError {
    constructor(message: string){
        super(message, HTTPSTATUS.UNAUTHORIZED);
    }
}
export class ForbiddenError extends CustomError {
    constructor(message: string){
        super(message, HTTPSTATUS.FORBIDDEN);
    }
}
export class NotFoundError extends CustomError {
    constructor(message: string){
        super(message, HTTPSTATUS.NOT_FOUND);
    }
}
export class NotAllowedMethodError extends CustomError {
    constructor(message: string){
        super(message, HTTPSTATUS.NOT_ALLOWED_METHOD);
    }
}
export class InternalError extends CustomError {
    constructor(message: string){
        super(message, HTTPSTATUS.INTERNAL_SERVER_ERROR);
    }
}