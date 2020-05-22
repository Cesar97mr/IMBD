import { Professional } from './Professional';

let P1 : Professional = new Professional("Cameron",33,"F",60,170,"Red","Brown","White",false,"Italian",1,"Actress");
let P2 : Professional = new Professional("James",43,"M",78,180,"Black","Blue","Black",true,"American",0,"Musician");
let P3 : Professional = new Professional("Harry",27,"M",75,177,"Blond","Green","White",false,"Spanish",0,"Designer");

console.log(P1.printProfessionals());
console.log(P2.printProfessionals());
console.log(P3.printProfessionals());

