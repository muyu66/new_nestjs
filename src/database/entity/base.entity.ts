import {
    Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn,
} from 'typeorm';

export class BaseEntity {

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;

}