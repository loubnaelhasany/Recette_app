import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modele/Film';
import { EventEmitter } from 'stream';
import { Router  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css',
  providers:[HttpClientModule]
})
export class FilmItemComponent {
  constructor(private router:Router){}
goToDetail(film: Film) {
     this.router.navigate(['/film',film.getId()]);
} 
  @Input() film!: Film;
}
