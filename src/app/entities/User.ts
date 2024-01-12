import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { uuid } from "uuid"

@Entity("users")
class User {

    @Column()
    name: string
  
    @Column()
    email: string
  
    @Column()
    admin: boolean
  
    @CreateDateColumn()
    created_at: Date
  
    @UpdateDateColumn()
    updated_at: Date
  

    @PrimaryColumn()
    readonly id: string

    constructor() {
        if (!this.id) {
          this.id = uuid()
        }
      }
    
}

export { User }