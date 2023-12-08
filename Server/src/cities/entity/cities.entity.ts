import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('iller')
export class CitiesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sehiradi: string;

}