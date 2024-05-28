import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './DTO/Create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './DTO/Updateuserdto.dto';

@Controller('users') //parent route
export class UsersController {
constructor(private readonly userserivice:UsersService){} // importinng the userservices and crearting a instance of it for use

//to add the user  POST/localhost:3000/users
    @Post()
    create(@Body(ValidationPipe) createuserdto:CreateUserDto) // Importing the validation pipe line inoder to validate the user incoming data as per the userdto
    {
        return this.userserivice.create(createuserdto)
    }


    // to find all the users GET/localhost:3000/users
    @Get()
    findalluser()
    {
        return this.userserivice.findalluser();
    }

    // to find a particular user  GET/localhost:3000/users/:id
    @Get(':id')
    fetchuser(@Param('id',ParseIntPipe) id:number) // user id is passed through params as string but the ParseIntPipe convert it to number
    {
        return this.userserivice.finduser(id);
    }
   
// to find the user and then to update it PATCH/localhost:3000/users
    @Patch(':id')
    update(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) updateuserdto:UpdateUserDto) 
    {
        return this.userserivice.update(id,updateuserdto)
    }

    // to delete a particular user from the database DELETE /localhost:3000/users/:id
    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number)
    {
        return this.userserivice.delete(id)
    }
 
}
