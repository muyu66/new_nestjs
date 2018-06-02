import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ConstEntity } from '../../const';
import { BaseEntity } from './base.entity';

@Entity()
export class TestEntity extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: ConstEntity.NAME_LENGTH })
    name: string;

}