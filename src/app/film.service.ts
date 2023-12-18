import { Injectable } from '@angular/core';
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
 
}
