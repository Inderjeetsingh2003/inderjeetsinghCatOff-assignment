import { Module } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddressController } from './wallet-address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletAddress } from './wallet-address.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([WalletAddress]),UsersModule], // imporitng the wallet entity and the userservices
  providers: [WalletAddressService],
  controllers: [WalletAddressController]
})
export class WalletAddressModule {}
