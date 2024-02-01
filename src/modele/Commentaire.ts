export  class Commentaire{
private contenu : string;
private auteur:string;

constructor( contenu : string,auteur:string){
             this.contenu=contenu;
             this.auteur= auteur;
             
}
public getContenu(): string {
    return this.contenu ;
} 
public getAuteur(): string {
    return this.auteur;
} 

 
}
