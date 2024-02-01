import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteService } from '../recette.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationService } from '../authentification.service';
import { profile } from 'console';


@Component({
  selector: 'app-Recette-detail',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './Recette-detail.component.html',
  providers:[RecetteService,HttpClientModule],
  styleUrl: './Recette-detail.component.css'
})
export class RecetteDetailComponent {
   recette!:any|undefined;
   dataGetComment:any;
   nouveauCommentaire:any;
    constructor(private service:RecetteService, 
                 private route : ActivatedRoute ,
                 private router:Router,public service2:AuthentificationService,
                 ){}
    nom:any;
    prenom:any;
    id_user:any=null;
    afficher:boolean=false;
    id!:string
    ngOnInit(){
      const id : string|null = this.route.snapshot.paramMap.get('id');
      if(id){
        this.service.getRecetteDetails(+id).subscribe(
          (data: any) => {
            console.log(data);
            this.recette= data;
            
           })
           this.service.getCommentByidRecette(+id).subscribe((data: any) => {
            this.dataGetComment = data;
          console.log(this.dataGetComment);})
          }
          this.nom=sessionStorage.getItem('nom');
          this.prenom=sessionStorage.getItem('prenom');
          this.id_user = sessionStorage.getItem('id');
          if(this.id_user){
            this.afficher=true;
          }else{
            this.afficher=false;
          }
        
          
          
    }
    goToListRecettes() {
       this.router.navigate(['/Recettes']);
      }
      goFavoris(){
        this.router.navigate(['/favoris']);
      }
      inscrire(){
        this.router.navigate(['/forms']);
      }
   
      addToFavorites(recette: any): void {
       
          const data ={
            id: recette.id,
            user: {id:this.id_user}
          }
         this.service.addRecetteToFavorites(data).subscribe(() => {
           // Gérez ici ce que vous voulez faire après l'ajout aux favoris
           console.log('Recette ajouté aux favoris avec succès!');
         });}
        addComment(){
          const dataComment={
            contenu : this.nouveauCommentaire,
            idmov:this.recette?.id,
            profile:{id:this.id_user}
          }
          this.service.addComment(dataComment).subscribe(() => {
            window.location.reload();
          });
        }
      }
    
  


