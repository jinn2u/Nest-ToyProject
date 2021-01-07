import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  //컨트롤러가 하는 일은 기본적으로 url을 가져오고 함수를 실행하는 것이다. (express의 router와 유사한 역할이다.)
  //컨트롤러는 그냥 url을 가져오는 역할일 뿐이다.
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
