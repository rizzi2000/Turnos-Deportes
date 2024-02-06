import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Cancha from "./Cancha.entity";

@Entity({ name: 'deporte' })
export default class Deporte extends BaseEntity{
    @PrimaryGeneratedColumn('uuid', {name: 'id_user'})
    idDeporte: string;

    @Column()
    nombre: string;

    @Column()
    cantidad: number;

    @OneToMany(() => Cancha, cancha => cancha.deporte, { eager: true })
    canchas: Cancha[];
}