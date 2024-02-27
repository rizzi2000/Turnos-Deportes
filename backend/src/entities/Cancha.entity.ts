import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Deporte from "./Deporte.entity";
import Club from "./Club.entity";
import Reserva from "./Reserva.entity";

@Entity({ name: 'cancha' })
export default class Cancha extends BaseEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'id_cancha'})
    idCancha: string;

    @Column()
    disponible: boolean;
    
    // @Column()
    // id_club: string;

    @ManyToOne(() => Club, club => club.canchas)
    club: Club;

    // @Column()
    // id_deporte: string;

    @ManyToOne(() => Deporte, deporte => deporte.canchas)
    deporte: Deporte;

    @OneToMany(() => Reserva, reserva => reserva.cancha)
    cancha: Cancha;

    @OneToMany(() => Reserva, reserva => reserva.usuario, { eager: true })
    reservas: Reserva[];
}