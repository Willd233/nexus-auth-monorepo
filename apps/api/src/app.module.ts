import { Module } from "@nestjs/common";
import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configurations from "./global/configurations";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),

    MongooseModule.forRootAsync({
      connectionName: "main",

      useFactory: (configService: ConfigService) => ({
        uri: configService.get("database.main"),
      }),
      inject: [ConfigService],
    }),

    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
