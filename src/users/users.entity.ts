import { WalletAddress } from "src/wallet-address/wallet-address.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn() // to genereate the primary key
    id:number;
    @Column()
    name:string;
    @Column({unique:true})
    email:string;
    @Column()
    password:string;

    
    @OneToMany(()=>WalletAddress,WalletAddress=>WalletAddress.user)
    walletAddresses:WalletAddress[]
}