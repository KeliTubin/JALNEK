import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToMany, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn, 
} from "typeorm";
import Post from "./Post";
import User from "./User";



@Entity()
export default class Tag extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column('varchar', {length: 75})
    title: string;
    @Column('varchar', {length: 100})
    metatitle?: string;
    @Column('text')
    content: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToMany(() => Post)
    posts: Post;
}