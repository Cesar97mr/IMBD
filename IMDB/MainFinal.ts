import { IMBD } from './IMBD';
import { Movie } from './Movie';
import { Professional } from './Professional';
import * as readline from "readline-sync";


let P1 : Professional = new Professional("Cameron Diaz",33,"F",60,170,"Red","Brown","White",false,"Italian",1,"Actress");
let P2 : Professional = new Professional("James Franco",43,"M",78,180,"Black","Blue","Black",true,"American",0,"Musician");
let P3 : Professional = new Professional("Harry Lozano",67,"M",75,177,"Blond","Green","White",false,"Spanish",0,"Director");
let P5 : Professional = new Professional("Miguelo",54,"M",79,187,"Brown","Black","White",false,"Mexican",0,"Writer");


let PeliculaFinal:Movie = new Movie(
    readline.question("Title : "),
    readline.question("Year: "),
    readline.question("Country: "),
    readline.question("Gener: ")
);
PeliculaFinal.actors = [P1,P2];
PeliculaFinal.director = P3;
PeliculaFinal.writer = P5;
PeliculaFinal.language = "English";
PeliculaFinal.plataform = "Netflix";
PeliculaFinal.isMCU = false;
PeliculaFinal.mainCharacterName = P1.name;
PeliculaFinal.producer = "Columbian";
PeliculaFinal.distributor = "Netflix";
console.log(PeliculaFinal.printMovies());

let imbd = new IMBD([PeliculaFinal]);
console.log(imbd.escribirEnFicheroJSON("PeliculaFinal.json"));