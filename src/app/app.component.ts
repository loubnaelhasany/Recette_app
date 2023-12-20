import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet } from '@angular/router';
import { MovieslistComponent } from "./movieslist/movieslist.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MovieslistComponent,RouterLink,HttpClientModule]
})
export class AppComponent {
  title = 'movies-list';
}
