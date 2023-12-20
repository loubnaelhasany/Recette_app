import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modele/Film';
import { FilmItemComponent } from "../film-item/film-item.component";
import { MovieService } from '../film.service';
import { FilmDetailComponent } from "../film-detail/film-detail.component";
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CommentComponent } from "../comment/comment.component";



@Component({
    selector: 'app-movieslist',
    standalone: true,
    templateUrl: './movieslist.component.html',
    styleUrl: './movieslist.component.css',
    template: `<app-film-item ></app-film-item>
               <app-film-detail></app-film-detail>`,
    providers: [MovieService, HttpClientModule],
    imports: [CommonModule, FilmItemComponent, FilmDetailComponent, HttpClientModule, SearchBarComponent, CommentComponent]
})
export class MovieslistComponent {
 films:Array<Film>=[];
 service: MovieService;

 constructor(monService:MovieService){
  this.service =monService;
 }
 ngOnInit(){
    this.service.getAllMovies().subscribe((data: Film[]) => {
        this.films = data;
      });
 }
 searchMovies(text: string, page: number) {
    this.service.searchMovies(text, page).subscribe((movies: Film[]) => {
         this.films= movies;
    });
  }

}