import { BadRequestError } from '../httpResponse/customError';

export function isString(string: any): boolean{ 
    return typeof(string) === 'string';
}

export function isNumber(number: any): boolean{
    // Poner !! hace que retorne true en caso de lo que siga sea correcto;
    // En este caso parsear lo que llega a numero (si llegará un string no se podria)
    return !!Number(number); 
}

export function isPositiveNumber(number: any): boolean {
    return isNumber(number) && Number(number) > 0
}

export function parseToNumber(x: any): number{
    if (!isPositiveNumber(x)) {
        throw new BadRequestError(x +' is not a positive number');
    }
    return Number(x);
}
