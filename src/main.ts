import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    //데코레이터가 없는 속성은 제거되어 서버로 들어간다.
    whitelist: true,
    //클라이언트에서 온 데이터 중 whitelist에 존재하지 않느 속성이 있다면(데코레이터가 없는속성이 제거된다.)httpException을 발생시킨다.
    forbidNonWhitelisted: true,
    transform: true,
  }))
  await app.listen(3000);
}
bootstrap();
