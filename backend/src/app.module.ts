import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // This is the service name in docker-compose.yml
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'literature_db',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
