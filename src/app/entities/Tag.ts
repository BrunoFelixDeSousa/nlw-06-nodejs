import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm"
import { v4 as uuid } from "uuid"
@Entity("tags")
export class Tag {

    @PrimaryColumn()
    readonly id: string = uuid()

    @Column()
    name!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
