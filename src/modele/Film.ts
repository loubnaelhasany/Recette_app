export class Film{
    private id: number;
    private vote: number;
    private title:string;
    private poster_path:string;
    private overview :string ;
    private release_date:string;
    constructor(id:number,vote:number,title:string,poster_path:string,overview:string,release_date:string){
        this.id=id;
        this.vote=vote;
        this.title=title;
        this.poster_path=poster_path;
        this.overview=overview;
        this.release_date=release_date;

    }
    public getId(): number {
        return this.id;
    }
    public getVote(): number {
        return this.vote;
    } 
    public getTitle(): string {
        return this.title;
    }
     public getOverview(): string {
        return this.overview;
    }
     public getPoster_Path(): string{
        return this.poster_path;
    }
     public getRelease_date(): string {
        return this.release_date;
    }
    
    



}