import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../film.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  providers:[HttpClientModule,MovieService]
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchText: string = '';

  onInputChange(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    this.search.emit(this.searchText);
  }
}

