
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Commentaire } from '../modele/Commentaire';



@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  getRecetteById(RecetteId: number) {
    throw new Error('Method not implemented.');
  }

  private API_TOKEN: string = '2f6ca86ca4d044e7aca38776267c3948';
  private baseUrl: string = 'https://api.spoonacular.com/';


  constructor(private http: HttpClient) {}

  // Récupérer la liste des Recettes populaires
  getPopularRecettes(): Observable<any> {
    const url :string = ` ${this.baseUrl}Recette/popular?api_key=${this.API_TOKEN}`;
    return this.http.get(url);
  }

  // Récupérer la liste des Recettes en fonction d'un texte
  searchRecettes(text: string): Observable<any> {
    const url = `${this.baseUrl}/recipes/complexSearch?apiKey=${this.API_TOKEN}&query=${text}&language=fr`;
  return this.http.get(url);
  }

  getAllRecettes(): Observable<any> {
    const url = `${this.baseUrl}recipes/search?apiKey=${this.API_TOKEN}`;
    return this.http.get(url);
  
  }

  private apiUrl = 'http://localhost:8080/Film';
  addRecetteToFavorites(Recette: any): Observable<any> {
    const url = `${this.apiUrl}`;
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(url, Recette,{ headers });
  }
  private urlComment='http://localhost:8080/Commentaire';
  addComment(comment:any ):Observable<any>{
    const url = `${this.urlComment}`;
    const headers = { 'Content-Type': 'application/json' };
     return this.http.post<any>(url,comment,{headers});
      
  }
  private urlProfile ='http://localhost:8080/Profile';
  addClient(client:any):Observable<any>{
    const url = `${this.urlProfile}`;
    const headers = { 'Content-Type': 'application/json' };
     return this.http.post<any>(url,client,{headers});
  }
  getClient(email:string, motDePasse:string):Observable<any>{
    const url= `${this.urlProfile}/${email}/${motDePasse}`;
    return this.http.get(url);

  }
  getCommentByidRecette(id:number):Observable<any>{
            const url=`${this.urlComment}/${id}`;
           return  this.http.get(url);
  }
  getFovoris(id_user:number):Observable<any>{
    const url = `${this.apiUrl}/${id_user}`;
    return this.http.get(url);
  }

  // Récupérer le détail d'un Recette
  getRecetteDetails(RecetteId: number): Observable<any> {
    const url = `${this.baseUrl}/recipes/${RecetteId}/information?apiKey=${this.API_TOKEN}&language=fr`;
    return this.http.get(url);

  }
  deleteRecette(id:number, userId:number):Observable<any>{
    const url =`${this.apiUrl}/${id}/${userId}` ;
    return this.http.delete(url);
  }
}



 

