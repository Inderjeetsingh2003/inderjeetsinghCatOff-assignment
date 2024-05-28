import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./Create-user.dto";


// setting up the userupdate dto inorder to accept the partail inputs for the user to update and then validate it
export class UpdateUserDto extends PartialType(CreateUserDto){

}