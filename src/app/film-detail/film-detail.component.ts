import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../modele/Film';
import { MovieService } from '../film.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './film-detail.component.html',
  providers:[MovieService,HttpClientModule],
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent {
   film!: Film|undefined;
    constructor(private service:MovieService, 
                 private route : ActivatedRoute ,
                 private router:Router
                 ){}
    ngOnInit(){
      const id : string|null = this.route.snapshot.paramMap.get('id');
      if(id){
        this.service.getMovieDetails(+id).subscribe(
          (data: Film) => {
            this.film = data;
            
           })
          }
    }
    goToListFilms() {
       this.router.navigate(['/films']);
      }
}