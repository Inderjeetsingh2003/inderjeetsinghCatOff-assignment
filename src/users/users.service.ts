import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/Create-user.dto';
import { UpdateUserDto } from './DTO/Updateuserdto.dto';

@Injectable()
export class UsersService {
constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User> // injecting the user entity in the service for use
){}


// function to add new user
async create(createuserdto:CreateUserDto){
    const user=this.userRepository.create(createuserdto);
    return this.userRepository.save(user);
}

// function to find the particular user
async finduser(id:number)
{
    const user= await this.userRepository.findOne({where:{id},relations:['walletAddresses']})
    if(!user)
        {
            throw new NotFoundException("user not found")
        }
    return user;
}

// function to return all the users 
async findalluser()
{
    const user=await this.userRepository.find({relations:['walletAddresses']})
    return user;
}

// function to find and update all the users
async update(id:number,updateuserdto:UpdateUserDto)
{
    
    const user=this.userRepository.findOne({where:{id},relations:['walletAddresses']})
    if(!user)
        {
            throw new NotFoundException("user is not in the database");

        }
    await this.userRepository.update(id,updateuserdto)
    const updateduser=this.userRepository.findOne({where:{id},relations:['walletAddresses']})
            return updateduser
}

//function to delete a particular user from the database
async delete(id: number)
{
   const user=this.userRepository.find({where:{id}})
   if(!user)
    {
        throw new NotFoundException("no such user exits");
    }
   
   try{

       await this.userRepository.delete(id);
       return "the user is successfully deleted"
   }
   catch(error)
   {
    console.log(error.message)
    return "unable to delte the user"
   }
}

}
