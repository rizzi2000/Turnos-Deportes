import { BaseEntity, Column, Double, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Cancha from "./Cancha.entity";
import Usuario from "./Usuario.entity";

Entity({ name: 'reserva' })
export default class Reserva extends BaseEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'id_reserva'})
    idReserva: string;

    @ManyToOne(()=> Usuario, usuario  => usuario.reservas )
    usuario: Usuario;

    @ManyToOne(()=> Cancha , cancha => cancha.reservas )
    cancha: Cancha;

    @Column()
    limiteCancelacion: Date;

    @Column()
    horarioTurno: Date;

    @Column()
    precio: Double;
}

   