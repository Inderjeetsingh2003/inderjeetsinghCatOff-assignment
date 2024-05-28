import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletDto } from './createwallet.dto';

@Controller('wallet-address') // parent-route
export class WalletAddressController {
constructor(private readonly walletaddressserivce:WalletAddressService)
{
// injecting the walletservice for use
}

// route to add the address POST localhost://300:/wallet-route
@Post()
create(@Body(ValidationPipe) createwalletdto:CreateWalletDto) // using the validationpipe to include a basic validation on incoming data
{
return this.walletaddressserivce.addaddress(createwalletdto)
}


// route to find the particular address  GETlocalhost://300:/wallet-route/:id
@Get(':id')
findaddress(@Param('id',ParseIntPipe) id:number) // usign the parseintpipe inoder to convert the incling string from params to number
{
    return this.walletaddressserivce.findaddress(id);
}

// route to get all the address GET localhost://300:/wallet-route
@Get()
findalladdress()
{
    return this.walletaddressserivce.findalladdress()
}


// route to find a particular address and update it  PATCH localhost://300:/wallet-route/:id
@Patch(':id')
update(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe)updateaddressdto: Partial<CreateWalletDto>) // using the Partial inoder ot define the partiaility in the incoming data (i.e some input might not be present)
{
return this.walletaddressserivce.updateaddress(id,updateaddressdto)
}



// route to delelte the address. DELETE localhost://300:/wallet-route
@Delete(':id')
remove(@Param('id',ParseIntPipe) id:number)
{
    return this.walletaddressserivce.remove(id)
}

}
