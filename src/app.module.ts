import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlowersModule } from './flowers/flowers.module';
import { LoggerMiddleware } from './conception/middleware';

@Module({
  imports: [FlowersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers');
  }
}
// import { Module } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

// @Module({
//   imports: [
//     ServeStaticModule.forRoot({
//       rootPath: join(__dirname, '..', 'pointclouds'),
//       serveRoot: '/pointclouds',
//     }),
//   ],
// })
// export class AppModule {}
