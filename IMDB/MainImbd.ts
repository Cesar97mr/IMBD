import { IMBD } from './IMBD';
import { Movie } from './Movie';
let M1 : Movie = new Movie("The life of PI",2015,"Indian","Aventure");
let M2 : Movie = new Movie("Coherence",2010,"American","Suspense");
let arrayMovies : Movie[] = [M1,M2];

let imbd : IMBD = new IMBD(arrayMovies);


