import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CitiesModule } from './cities/cities.module';
import { YksLisansModule } from './yks-lisans/yks-lisans.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get<string>('DATABASE_HOST'),
        port: parseInt(configService.get<string>('DATABASE_PORT')),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASS'),
        database: configService.get<string>('DATABASE_NAME'),
        options: {
          encrypt: false, // MSSQL-specific option
        },
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        connectionTimeout:30000
      }),
      inject: [ConfigService],
    }),
    CitiesModule,
    YksLisansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
