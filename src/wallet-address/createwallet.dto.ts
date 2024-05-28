import { IsNotEmpty, IsNumber, IsString } from "class-validator";


// wallter data transer obejct 
// importing the validaots from class validator
export class CreateWalletDto {
    
    @IsString()
    address:string;

    @IsNotEmpty()

    @IsNumber()
    userid:number;
}