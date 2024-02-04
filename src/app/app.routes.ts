import { Routes } from '@angular/router';
import { RecetteslistComponent } from './Recetteslist/Recetteslist.component';
import { InscreptionComponent } from './inscreption/inscreption.component';
import { ConnectionComponent } from './connection/connection.component';
import { FavorisComponent } from './favoris/favoris.component';
import { RecetteDetailComponent } from './Recette-detail/Recette-detail.component';
export const routes: Routes = [
   { path: 'Recettes', component :RecetteslistComponent },
   {path:'Recette/:id', component: RecetteDetailComponent},
   {path:'forms',component:ConnectionComponent},
   {path:'inscription',component:InscreptionComponent},
   {path:'favoris',component:FavorisComponent},
   {path:'',redirectTo:'Recettes',pathMatch:'full'}
];
