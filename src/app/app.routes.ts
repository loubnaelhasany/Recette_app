import { Routes } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

export const routes: Routes = [
   { path: 'films', component :MovieslistComponent },
   {path:'film/:id', component: FilmDetailComponent},
   {path:'',redirectTo:'films',pathMatch:'full'}
];
