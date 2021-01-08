import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import {Movie} from './entities/movie.entities'
import { CreateMoveiDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

//Entry Point를 컨트롤한다.
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}
    @Get()
    getAll():Movie[]{
        return this.moviesService.getAll()
    }
    @Get(":id")
    getOne(@Param('id') movieId:number):Movie{
        return this.moviesService.getOne(movieId)
    }
    @Post()
    create(@Body()movieData: CreateMoveiDTO){
        return this.moviesService.create(movieData)
    }
    @Delete(":id")
    remove(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId)
    }
    @Patch(':id')
    updateOneMovie(@Param('id') movieId:number, @Body() updateData:UpdateMovieDTO){
        return this.moviesService.updateOneMovie(movieId, updateData)
    }
}