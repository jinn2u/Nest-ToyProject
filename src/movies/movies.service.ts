import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMoveiDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import {Movie} from './entities/movie.entities'

@Injectable()
export class MoviesService {
    private movies: Movie[] = []

    getAll(): Movie[] {
        //db쿼리가 오는 부분
        return this.movies
    }
    getOne(id:number):Movie {
        const movie = this.movies.find(movie => movie.id === id)
        if(!movie) {
            throw new NotFoundException(`Movie with ID: ${id} not Found`)
        }
        return movie
    }
    deleteOne(id:number) {
        this.getOne(id)
        this.movies = this.movies.filter(movie => movie.id !== id)
    }
    create(movieData: CreateMoveiDTO) {
        this.movies.push({
            id: this.movies.length +1,
            ...movieData,
        })
    }
    updateOneMovie(id:number, updateData: UpdateMovieDTO) {
        const movie = this.getOne(id)
        this.deleteOne(id)
        this.movies.push({...movie, ...updateData})

    }
}
