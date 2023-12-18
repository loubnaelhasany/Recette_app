import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modele/Film';
import { FilmItemComponent } from "../film-item/film-item.component";
import { FilmService } from '../film.service';
import { FilmDetailComponent } from "../film-detail/film-detail.component";

@Component({
    selector: 'app-movieslist',
    standalone: true,
    templateUrl: './movieslist.component.html',
    styleUrl: './movieslist.component.css',
    template: `<app-film-item ></app-film-item>
               <app-film-detail></app-film-detail>`,
    imports: [CommonModule, FilmItemComponent, FilmDetailComponent]
})
export class MovieslistComponent {
 films:Array<Film>=[];
 service: FilmService;
 constructor(service:FilmService ){
  this.service =service;
 }
 ngOnInit(){
    this.films = this.service.getALLFilms();
 }

}
