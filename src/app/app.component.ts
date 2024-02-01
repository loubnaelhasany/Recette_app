import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink,RouterOutlet } from '@angular/router';
import { RecetteslistComponent } from "./Recetteslist/Recetteslist.component";
import { HttpClientModule } from '@angular/common/http';
import { RecetteService } from './recette.service';
import { AuthentificationService } from './authentification.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers:[RecetteService,HttpClientModule],
    imports: [CommonModule, RouterOutlet, RecetteslistComponent,RouterLink,HttpClientModule]
})
export class AppComponent {
  title = 'Recettes-list';
  constructor(private router:Router,private service:RecetteService, public service2:AuthentificationService){}
}
