import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
import { Router  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-recherche',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './item-recherche.component.html',
  styleUrl: './item-recherche.component.css',
  providers:[HttpClientModule]
})
export class ItemRechercheComponent {
  constructor(private router:Router){}
  baseUri: string ="https://spoonacular.com/recipeImages/";
goToDetail(recette: any) {
     this.router.navigate(['/Recette',recette.id]);
} 
  @Input() recette!: any;
}
