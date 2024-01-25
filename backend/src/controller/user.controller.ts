import { Request, Response } from 'express';
import { ResponseCreated, ResponseOk } from '../httpResponse/customResponse';
import ResponseHandler from '../httpResponse/responseHandler';
import * as userService from '../service/user.service';
import { parseToNumber } from '../utils/global.utils';

export async function getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();

    // retorno el response handler creado.
    return ResponseHandler(res, new ResponseOk(users));
}
export async function getUserById(req: Request, res: Response) {
    const idUser  = parseToNumber(req.params.idUser);

    const user = await userService.getUserById(idUser);
    return ResponseHandler(res, new ResponseOk(user));
}

export async function createUser(req: Request, res: Response){
    const { name, phone } = req.body;

    const createdUser = await userService.createUser(name, phone);
    return ResponseHandler(res, new ResponseCreated(createdUser));
}
export async function updateUser(req: Request, res: Response){
    const idUser = parseToNumber(req.params.idUser);
    const { name, phone } = req.body;

    const createdUser = await userService.updateUser(idUser, name, phone);
    return ResponseHandler(res, new ResponseOk(createdUser));
}
export async function deleteUser(req: Request, res: Response){
    const idUser = parseToNumber(req.params.idUser);
    
    const updatedId = await userService.deleteUser(idUser);
    return ResponseHandler(res, new ResponseOk(updatedId));
}