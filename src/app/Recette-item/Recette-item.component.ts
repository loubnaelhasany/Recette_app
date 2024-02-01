import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
import { Router  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-Recette-item',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './Recette-item.component.html',
  styleUrl: './Recette-item.component.css',
  providers:[HttpClientModule]
})
export class RecetteItemComponent {
  constructor(private router:Router){}
  baseUri: string ="https://spoonacular.com/recipeImages/";
goToDetail(recette: any) {
     this.router.navigate(['/Recette',recette.id]);
} 
  @Input() recette!: any;
}
