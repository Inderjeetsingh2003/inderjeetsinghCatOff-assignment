import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WalletAddress } from './wallet-address.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreateWalletDto } from './createwallet.dto';

@Injectable()
export class WalletAddressService {
constructor(@InjectRepository(WalletAddress) // importing the wallet entity to use 
private walletrepository:Repository<WalletAddress>,
private userservice:UsersService ){} // importing the userservices from the users module for user



// adding the address
async addaddress(createwalletaddressdto:CreateWalletDto)
{ 
    // first checking if the user with the specific id exits..
    const user=await this.userservice.finduser(createwalletaddressdto.userid)
    if(!user)
        {
            throw new NotFoundException("user is not present") // if not then throwing the exception
           
            }
            const walletaddress= this.walletrepository.create({
                address:createwalletaddressdto.address,
                user

        })
        return this.walletrepository.save(walletaddress)
}


//finding the address linked to a specific id
async findaddress(id:number)
{
    const address=await this.walletrepository.findOne({where:{id},relations:['user']});
    if(!address)
        {
            throw new NotFoundException("the address is not found")

        }
        return address
}

// finding all the addresses
async findalladdress()
{
    const address=await this.walletrepository.find({relations:['user']});
    if(!address)
        {
        throw new NotFoundException("no address exits")    
        }
        return address
}


// updating the address 
// first checking whetver it exists or not
async updateaddress(id:number,updateaddressdto:Partial<CreateWalletDto>)
{
    const walletaddress=await this.walletrepository.findOne({where:{id}})
    if(!walletaddress)
        {
            throw new NotFoundException("no such address found");

        }
        if(updateaddressdto.address)
            {
                walletaddress.address=updateaddressdto.address
            }
            return this.walletrepository.save(walletaddress);
        
}

// deleting the address 
async remove(id: number){
await this.walletrepository.delete(id)
  }

}
