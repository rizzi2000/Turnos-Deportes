import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export default class User extends BaseEntity{
    @PrimaryGeneratedColumn({name: 'id_user'}) // id autogenerado - en la db se llama 'id_user'
    idUser: number;

    @Column()
    name: string;

    @Column()
    phone: number;
}