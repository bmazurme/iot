import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OAuthModule } from './oauth/oauth.module';
import { UsersModule } from './users/users.module';

import { User } from './users/entities/user.entity';
import { BridgeController } from './bridge/bridge.controller';
import { BridgeService } from './bridge/bridge.service';
import { BridgeModule } from './bridge/bridge.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST') ?? 'localhost',
        port: +configService.get('POSTGRES_PORT') ?? 5432,
        username: configService.get('POSTGRES_USER') ?? 'postgres',
        password: configService.get('POSTGRES_PASSWORD') ?? 'newPassword',
        database: configService.get('POSTGRES_DB') ?? 'nestplaces',
        entities: [User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    OAuthModule,
    UsersModule,
    BridgeModule,
  ],
  controllers: [AppController, BridgeController],
  providers: [AppService, BridgeService],
})
export class AppModule {}
