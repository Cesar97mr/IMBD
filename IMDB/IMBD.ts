import { Movie } from './Movie';
export class IMBD{
    public peliculas:Movie[]

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }
}