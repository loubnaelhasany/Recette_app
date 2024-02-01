import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private router:Router) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('nom');
    sessionStorage.removeItem('prenom');
    this.router.navigate(['forms']);
  }
}
