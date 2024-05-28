import { User } from "src/users/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

 
 @Entity()
 export class WalletAddress{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    address:string;

    @ManyToOne(()=>User,user=>user.walletAddresses,{onDelete:"CASCADE"})
    user:User
 }