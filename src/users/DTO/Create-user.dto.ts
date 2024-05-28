import { IsEmail, IsNotEmpty, IsString } from "class-validator";


// user data-transer-obejct that inlcudes some basic validation for the user data input
export class CreateUserDto{

    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsNotEmpty()
    password:string;
}