import { NotFoundError } from "../httpResponse/customError";
import User from "../entities/User.entity";

// la funcion retorna una promise (porque es asincrona al tener que ir a la db) de un array de usuarios
export function getAllUsers(): Promise<User[]>{
    return User.find({
        order:{ idUser: 'ASC' }
    });
}
export async function getUserById(idUser: number): Promise<User>{
    const user = await User.findOneBy({ idUser });

    if (!user) throw new NotFoundError('usuario no encontrado');

    return user;
}
export function createUser(name: string, phone: number): Promise<User>{
    const newUser = new User();
    newUser.name = name;
    newUser.phone = phone;

    return newUser.save();
}
export async function updateUser(idUser: number, name: string, phone: number){
    const user = await getUserById(idUser);

    user.name = name;
    user.phone = phone;
    return user.save()
}
export async function deleteUser(idUser: number): Promise<number>{
    const result = await User.delete({ idUser });

    if (result.affected === 0) throw new NotFoundError('usuario no encontrado');
    
    return idUser;
}