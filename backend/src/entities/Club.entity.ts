import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Cancha from "./Cancha.entity";

@Entity({ name: 'club' })
export default class Club extends BaseEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'id_club'})
    idClub: string;

    @Column()
    nombre: string;

    @Column()
    ubicacion: string; // { calle: string; numero: number }

    @OneToMany(() => Cancha, cancha => cancha.club, { eager: true })
    canchas: Cancha[];
}