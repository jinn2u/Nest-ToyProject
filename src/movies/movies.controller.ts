import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

//Entry Point를 컨트롤한다.
@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "This will return all movies"
    }
    @Get("/:id")
    getOne(@Param('id')id:string){
        return `this will return one movie with the ID: ${id}`
    }
    @Post()
    create(){
        return 'this will create a movie'
    }
    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `This will delete a movie with the ID: ${movieId}`
    }
    @Patch('/:id')
    patchMovie(@Param('id') movieId:string){
        return `this will patch a movie with the ID: ${movieId}`
    }
}
