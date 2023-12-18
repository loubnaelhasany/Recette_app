export class Film {
    id:number;
    nom:string;
    description:string;
    img:string;

    constructor(id:number,nom:string,descriprion:string,img:string){
        this.description=descriprion;
        this.id= id;
        this.nom= nom;
        this.img = img ;
    }


}