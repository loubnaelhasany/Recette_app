import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modele/Film';
import { FilmService } from '../film.service';
import { ActivatedRoute ,Router } from '@angular/router';


@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent {
   film!: Film|undefined;
    constructor(private service:FilmService , 
                 private route : ActivatedRoute ,
                 private router:Router
                 ){}
    ngOnInit(){
      const id : string|null = this.route.snapshot.paramMap.get('id');
      if(id){
      this.film = this.service.getFilmById(+id);}
    }
    goToListFilms() {
       this.router.navigate(['/films']);
      }
}
