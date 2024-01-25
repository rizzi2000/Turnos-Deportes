import { Response, Request, NextFunction } from "express";

// se espera un controller (funcion con req, res que retorna algo);
type controllerExpected = ( req: Request, res: Response, next?: NextFunction ) => unknown;

// controllerTryCatch es una funcion que retorna una funcion
const controllerTryCatch = (controller: controllerExpected) => (

    // la funcion retornada le da espacio al controller de que haga lo que tenga que hacer 
    // y si tira error lo captura. Es un try catch generalizado
    async (req:Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res);
        } catch (error) {
            return next(error);
        }
    }
);  

export default controllerTryCatch;