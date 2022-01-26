import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from 'typeorm';
import Post from './Post';

@Entity()
export default class User extends BaseEntity {
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
    
    @OneToMany(()=> Post, (post) => post.author, {nullable: true})
    posts: Post[];



}