import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
import { User } from './users/users.entity';
import { WalletAddress } from './wallet-address/wallet-address.entity';
@Module({
  // configuring the .env file in oder to use the variables from it
  imports: [
    ConfigModule.forRoot(

    ),

    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      // setting up the connection with the database
      useFactory: (configService:ConfigService)=>(
        {
          type:'postgres',
          host:configService.get('DB_HOST'),
          port:+configService.get('DB_PORT'),
          username:configService.get('DB_USERNAME'),
          password:configService.get('DB_PASSWORD'),
          database:configService.get('DB_NAME'),
          entities:[User,WalletAddress],
          synchronize:true // do not use in real project
          
        }),
    }),
    UsersModule,
    WalletAddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
