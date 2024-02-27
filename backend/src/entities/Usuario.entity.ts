import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Reserva from './Reserva.entity';

@Entity({ name: 'usuario' })
export default class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'id_user'})
    idUser: string;

    @Column()
    nombre: string;

    @Column()
    contraseña: string ;

    @Column({ nullable: true })
    phone: number;
    @Column({ nullable: true })
    email: string;

    @OneToMany(() => Reserva, reserva => reserva.usuario, { eager: true })
    reservas: Reserva[];
}