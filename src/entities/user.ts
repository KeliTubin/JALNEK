import { BaseEntity, Column, CreateDateColumn, Entity, getConnection, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    [x: string]: any;
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('varchar', {length: 150})
    firstName: string;
    @Column('varchar', {length: 150})
    middleName?: string;
    @Column('varchar', {length: 150})
    lastName: string;
    @Column('varchar')
    mobile: string;
    @Column('varchar', { length: 320, unique: true } )
    email: string;
    @Column({default: ()=> 'CURRENT_TIMESTAMP'})
    lastLogin: Date;
    @Column('tinytext', {nullable: true})
    intro: string;
    @Column('text', {nullable: true})
    profile: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAT: Date;
// COLUMN (SULGUDE SEES) ON SEADISTUSED, MIS GENEREERITAKSE 
// HEIDIS BLOG ALLA TABELI VÄLJA VÄÄRTUSTE SEADISTUSEKS.
    // save(){
    //     return getConnection().getRepository('User').findOne(this);
    // }
}




export default User;