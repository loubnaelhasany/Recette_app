import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterOutlet } from '@angular/router';
import { MovieslistComponent } from "./movieslist/movieslist.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MovieslistComponent,RouterLink]
})
export class AppComponent {
  title = 'movies-list';
}
