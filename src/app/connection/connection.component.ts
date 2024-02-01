import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecetteService } from '../recette.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[RecetteService,HttpClientModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {
  constructor(private router: Router,private service:RecetteService){}
  email!:string;
  data:any=null;
  motDePasse!:string;
  
  onSubmit(){
    this.service.getClient(this.email,this.motDePasse).subscribe((data: any) => {
      this.data = data;
      console.log(data.id+ data.nom);
      sessionStorage.setItem('nom',data.nom);
      sessionStorage.setItem('prenom',data.prenom);
      sessionStorage.setItem('id',data.id);
      this.router.navigate(['/Recettes']);

    });
  }
  goFavoris(){
    this.router.navigate(['/favoris']);
  }
  inscription(){
        this.router.navigate(['/inscription'])
  }

}
