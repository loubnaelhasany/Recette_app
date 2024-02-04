import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteService } from '../recette.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';


@Component({
  selector: 'app-favoris',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  constructor(private service: RecetteService, private route: ActivatedRoute, private router:Router,public service2:AuthentificationService,) { }

  data!: any[];
  id_user: any;
  recettes: any[] = []; // Initialisez la liste des Recettes
  nom:any;
  prenom:any;
  afficher:boolean=false;

  ngOnInit() {
    this.id_user = sessionStorage.getItem('id');
    this.nom=sessionStorage.getItem('nom');
    this.prenom=sessionStorage.getItem('prenom');
    this.id_user = sessionStorage.getItem('id');
    if(this.id_user){
      this.afficher=true;
    }else{
      this.afficher=false;
    }
    this.service.getFovoris(this.id_user).subscribe((data: any) => {
      this.data = data;
      // Vérifiez s'il y a des Recettes dans la liste des favoris
      if (this.data && this.data.length > 0) {
        // Parcourez chaque Recette dans la liste des favoris
        for (const fav of this.data) {
          // Pour chaque Recette, obtenez les détails
          this.service.getRecetteDetails(fav.id).subscribe(
            (RecetteDetails: any) => {
              console.log(RecetteDetails);
              this.recettes.push(RecetteDetails); // Ajoutez le Recette à la liste
              
            },
           
            error => {
              console.error('Erreur lors de la récupération des détails du Recette', error);
            }
          );
        }
      }
    });
   
  }
  goToDetail(Recette:any) {
    this.router.navigate(['/Recette',Recette.id]);
} 
supprimer(Recette:any){
  console.log(Recette);
  this.service.deleteRecette(Recette.id,this.id_user).subscribe((data:any)=>{
    console.log("est supprimer",data);
  })
} 

}

