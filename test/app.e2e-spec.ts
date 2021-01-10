import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      //데코레이터가 없는 속성은 제거되어 서버로 들어간다.
      whitelist: true,
      //클라이언트에서 온 데이터 중 whitelist에 존재하지 않느 속성이 있다면(데코레이터가 없는속성이 제거된다.)httpException을 발생시킨다.
      forbidNonWhitelisted: true,
      transform: true,
    }))
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/app')
      .expect(200)
      .expect('Welcome to my Movie API!');
  });
  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect([])
    })
    it('POST', () => {
      return request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test',
        year: 2000,
        genre:['Test']
      })
      .expect(201)
    })
    it('POST', () => {
      return request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test',
        year: 2000,
        genre:['Test']
      })
      .expect(201)
    })
    it('POST wrong json', () => {
      return request(app.getHttpServer())
      .post('/movies')
      .send({
        title: 'Test',
        year: 2000,
        genre:['Test'],
        other: 'thing'
      })
      .expect(400)
    })
    it('DELETE', () => {
      return request(app.getHttpServer())
      .delete('/movies')
      .expect(404)
    })
  })
  describe('movies/:id', () => {
    it('GET 200', () => {
    return request(app.getHttpServer())
      .get('/movies/1')
      .expect(200)
    })
    it('GET 404', () => {
      return request(app.getHttpServer())
        .get('/movies/999')
        .expect(404)
      })
    it('PATCH', () => {
      return request(app.getHttpServer())
      .patch('/movies/1')
      .send({
        title:"Updated Test"
      })
      .expect(200)
    })
    it('DELETE', () => {
      return request(app.getHttpServer())
      .delete('/movies/1')
      .expect(200)
    })
  })
});
