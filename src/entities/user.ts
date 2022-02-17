import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
    DeleteDateColumn 
} from 'typeorm';
import Post from './Post';

type UserInfo ={
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    mobile: string,
    email: string,
    intro: string,
    profile?: string,
    createdAt: Date,
    updatedAt: Date
  }

// Dekoraator käsk, mis ütleb Typeormile, et tegemist on entity ehk
// andmebaasi objekti kirjeldusega
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
    intro?: string;
    @Column('text', {nullable: true})
    profile: string;

    fullName: string;

    @DeleteDateColumn()
    deleteAt: boolean;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAT: Date;
 
    
// COLUMN (SULGUDE SEES) ON SEADISTUSED, MIS GENEREERITAKSE 
// HEIDIS BLOG ALLA TABELI VÄLJA VÄÄRTUSTE SEADISTUSEKS.

//NB!
// 1) LAZY LODAING (AKA ILMA EAGER: true) ANNAB KASUTAJA ANDMED 
    /* @OneToMany(()=> Post, (post) => post.author)
    posts: Post[]; */

// 2) EAGER: true ANNAB KASUTAJA ANDMED KOOS BLOGI POSTITUSTEGA
    
    @OneToMany(()=> Post, (post) => post.author, {eager: true})
    posts: Post[];

    UserInfo() {
        return {
            id: this.id,
            firstName: this.firstName,
            middleName: this.middleName ?? '',
            lastName: this.lastName,
            fullName: this.firstName + ' ' + this.lastName, 
            email: this.email,
            mobile: this.mobile,
            intro: this.intro ?? '',
            profile: this.profile ?? '',
            posts: this.posts,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

}