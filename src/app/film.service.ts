/*import { Injectable } from '@angular/core';
import { Film } from '../modele/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  listfilms : Film[] =[new Film(1, 'vendeta', 'Vendetta est un thriller daction américain écrit et réalisé par Jared Cohn et sorti en 2022. Il met en vedette Clive Standen, Theo Rossi, Mike Tyson, Thomas Jane et Bruce Willis. Le film est sorti dans un nombre limité de salles et sur des plateformes de vidéo à la demande le 17 mai 2022 par Redbox Entertainment.', 'https://img7.cdn.cinoche.com/images/14b63ac14dbd243133ba75aca2d3a371.jpg'),
  new Film(2,'SHE has a name','pièce de théâtre sur la traite des êtres humains écrite par Andrew Kooman en 2009 en tant quacte unique, puis étendue pour devenir une pièce complète en 2010. Elle aborde la traite denfants à des fins desclavage sexuel et a été inspirée par la tragédie de la mort de 54 personnes dans lincident de traite des êtres humains à Ranong.','https://m.media-amazon.com/images/M/MV5BMmI0ZWMzYjctMDdjOC00NGZiLWFkNDItNWJmZjlmZGU2NzAwXkEyXkFqcGdeQXVyMjA1NzUxOTM@._V1_.jpg'),
  new Film (3,'Your Name',' "Your Name" suit deux adolescents, Mitsuha Miyamizu et Taki Tachibana, qui découvrent quils peuvent échanger de corps de manière inexplicable. Le film explore les thèmes de lamour, de la destinée, et de la connexion entre deux personnes séparées par le temps et lespace.','https://fr.web.img2.acsta.net/pictures/16/12/12/13/49/295774.jpg'),
 new Film(4,'Tu Ne Tueras Point','Tu ne tueras point" (Hacksaw Ridge), réalisé par Mel Gibson, dépeint lhistoire remarquable de Desmond Doss, un objecteur de conscience pendant la Seconde Guerre mondiale. Refusant de porter une arme, Doss sert courageusement en tant que médecin de larmée, sauvant 75 vies lors de la bataille dOkinawa sans jamais tirer un seul coup de feu. Le film explore le courage extraordinaire de Doss face à ladversité, offrant une perspective inspirante sur la résilience humaine.','https://i.pinimg.com/736x/a8/cd/4e/a8cd4ec052397f1f215e0df9efb2aa41.jpg')
]
getALLFilms():Film[] {
  return this.listfilms;
}

getFilmById(id: number){
        const film = this.listfilms.find(elment=>  elment.id === id);
        return film ;
}
 
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../modele/Film';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovieById(movieId: number) {
    throw new Error('Method not implemented.');
  }
  private API_TOKEN: string = '41f2f66d0cbc7177849f5755d51c40db';
  private imageUrl: string = 'https://image.tmdb.org/t/p/w300';
  private baseUrl: string = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  // Récupérer la liste des films populaires
  getPopularMovies(): Observable<Film[]> {
    const url :string = ` ${this.baseUrl}movie/popular?api_key=${this.API_TOKEN}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        // Mapper les données de l'API vers le modèle Film
        return data.results.map((filmData: any) => {
          return new Film(
            filmData.id,
            filmData.vote_average,
            filmData.title,
            this.imageUrl + filmData.poster_path,
            filmData.overview,
            filmData.release_date,
            
          );
        });
      })
    );
  }

  // Récupérer la liste des films en fonction d'un texte
  searchMovies(text: string, page: number): Observable<Film[]> {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' +
      this.API_TOKEN + '&language=fr&query=' + text +"&page=" + page;
    return this.http.get(url).pipe(
      map((data: any) => {
        // Mapper les données de l'API vers le modèle Film
        return data.results.map((filmData: any) => {
          return new Film(
            filmData.id,
            filmData.vote_average,
            filmData.title,
            this.imageUrl + filmData.poster_path,
            filmData.overview,
            filmData.release_date
          );
        });
      })
    );
  }
  getAllMovies(): Observable<Film[]> {
    const url = `${this.baseUrl}discover/movie?api_key=${this.API_TOKEN}&language=fr`;
    return this.http.get(url).pipe(
      map((data: any) => {
        // Mapper les données de l'API vers le modèle Film
        return data.results.map((filmData: any) => {
          return new Film(
            filmData.id,
            filmData.vote_average,
            filmData.title,
            this.imageUrl + filmData.poster_path,
            filmData.overview,
            filmData.release_date
          );
        });
      })
    );
  }

  // Récupérer le détail d'un film
  getMovieDetails(movieId: number): Observable<Film> {
    const url = `${this.baseUrl}movie/${movieId}?api_key=${this.API_TOKEN}&language=fr`;
    return this.http.get(url).pipe(
      map((data: any) => {
        // Mapper les données de l'API vers le modèle Film
        return new Film(
          data.id,
          data.vote_average,
          data.title,
          this.imageUrl + data.poster_path,
          data.overview,
          data.release_date
        );
      })
    );
  }
}



 

