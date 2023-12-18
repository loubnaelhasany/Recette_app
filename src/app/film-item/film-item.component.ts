import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modele/Film';
import { EventEmitter } from 'stream';
import { Router  } from '@angular/router';


@Component({
  selector: 'app-film-item',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.css'
})
export class FilmItemComponent {
  constructor(private router:Router){}
goToDetail(film: Film) {
     this.router.navigate(['/film',film.id]);
} 
  @Input() film!: Film;
}
