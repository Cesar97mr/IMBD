export class Movie{
    public title:string
    public releaseYear:number
    public actors:string
    public nacionality:string
    public director:string
    public writer:string
    public language:string
    public plataform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public gener:string

    constructor(title:string, releaseYear:number, nacionality:string, gener:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.gener = gener;
    }
    public printMovies(){
        return "Tittle : " + this.title + "\n"+
                "Release Year : " + this.releaseYear + "\n"+
                "Nacionality : " + this.nacionality + "\n"+
                "Genero : " + this.gener;
}
}