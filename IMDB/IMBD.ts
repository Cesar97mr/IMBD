import { Movie } from './Movie';
import * as fs from 'file-system';
export class IMBD{
    public peliculas:Movie[]

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

    converterToJSON(name:string){
        let json = JSON.stringify(this.peliculas)
        fs.writeFile(name,json);
    }
    readJsontoObject(){
        let jsonLeido = require('/Users/Documents/workspace/test.json');
    }
    
}