import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"

@Entity("users")
export class User {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor()

  constructor(id?: string, name?: string, email?: string, admin?: boolean) {
    this.id = id || uuidv4();
    this.name = name || "";
    this.email = email || "";
    this.admin = admin || false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }   
    
}
