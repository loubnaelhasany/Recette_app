import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comments: { author: string; text: string }[] = [
    { author: 'Loubna', text: 'cest magnéfique' },
    { author: 'ahmmed', text: 'Jai beacoup aimé ça' }
  ];

  newComment = { author: 'Utilisateur', text: '' };

  addComment() {
    if (this.newComment.text.trim() !== '') {
      this.comments.push({ ...this.newComment });
      this.newComment.text = '';
    }
  }
}
