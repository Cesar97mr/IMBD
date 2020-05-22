import { Movie } from './Movie';
import * as fs from 'file-system';
export class IMBD{
    public peliculas:Movie[]

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

    escribirEnFicheroJSON(name:string){
        let json = JSON.stringify(this.peliculas)
        fs.writeFileSync(name,json);
    }
    obtenerInstanciaIMDB(nameFichero: string):IMBD{
        let instancia = fs.readFileSync(nameFichero, "utf8");
        const final:IMBD = new IMBD(JSON.parse(instancia));
        return final;
    }
}