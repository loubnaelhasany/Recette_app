import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecetteService } from '../recette.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-inscreption',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[RecetteService,HttpClientModule],
  templateUrl: './inscreption.component.html',
  styleUrl: './inscreption.component.css'
})
export class InscreptionComponent {
nom!: string;
prenom!:string;
message1!:string;
message2!:string;
email!:string;
motDePasse!:string;
estAdresseEmailValide: boolean = true;
regexEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
affiche1:boolean=false;
affiche2:boolean=false;
affiche3:boolean=false;
nom1:any;
 prenom1:any;

constructor(private service:RecetteService, 
  private router:Router,public service2:AuthentificationService
  ){}
  ngOnInit(){

  }
  onSubmit(){
   
    if(!this.email || !this.motDePasse || !this.nom || !this.prenom){
      this.affiche1=true;
      this.message1="Toutes les champs doivent être remlplis";
   }
   else{
    this.affiche1=false;
     this.estAdresseEmailValide = this.regexEmail.test(this.email);
     if(!this.estAdresseEmailValide ){
      this.affiche2=true;
      this.message2="email n'est pas valide";
     }else{
      this.affiche1=false;
      this.affiche2=false;
       const data ={
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        motDePasse: this.motDePasse
       }
       this.service.addClient(data).subscribe(() => {
        console.log('client ajouter'+this.nom);
        this.affiche3=true;
      });}
      
  } }
  connecter(){
     this.router.navigate(['/forms']);
  }
  goFavoris(){
    this.router.navigate(['/favoris']);
  }

}
