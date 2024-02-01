import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteService } from '../recette.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { ItemRechercheComponent } from "../item-recherche/item-recherche.component";
import { RecetteItemComponent } from '../Recette-item/Recette-item.component';



@Component({
    selector: 'app-Recetteslist',
    standalone: true,
    templateUrl: './Recetteslist.component.html',
    styleUrl: './recetteslist.component.css',
    template: `<app-Recette-item ></app-Recette-item>
               <app-Recette-detail></app-Recette-detail>`,
    providers: [RecetteService, HttpClientModule],
    imports: [CommonModule, RecetteItemComponent, HttpClientModule, SearchBarComponent, ItemRechercheComponent]
})
export class RecetteslistComponent {
 recettes:any;
 chercher:boolean =false;
 service: RecetteService;
 nom:any;
 prenom:any;
 id:any;
 afficher:boolean=false;
 constructor(monService:RecetteService,public service2:AuthentificationService,private router:Router){
  this.service =monService;
 }
 inscrire(){
  this.router.navigate(['/forms']);
}
goFavoris(){
  this.router.navigate(['/favoris']);
}
 ngOnInit(){
    this.service.getAllRecettes().subscribe((data: any) => {
      console.log(data);
        this.recettes = data;
        
        
      });
     this.nom=sessionStorage.getItem('nom');
     this.prenom=sessionStorage.getItem('prenom');
     this.id=sessionStorage.getItem('id');
     if(this.nom){
      this.afficher=true;
     }
 }
 searchRecettes(text: string) {
    this.service.searchRecettes(text).subscribe((recette: any) => {
      console.log(recette);
        this.chercher=true;
         this.recettes= recette;
    });
  }

}