import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-add-comment',
  templateUrl: './pokemon-add-comment.component.html',
  styleUrls: ['./pokemon-add-comment.component.scss']
})
export class PokemonAddCommentComponent implements OnInit {
  comment = '';

  constructor(public dialogRef: MatDialogRef<PokemonAddCommentComponent>) { }

  ngOnInit(): void {
  }

  sendCommentSignal() {
    console.log('comment: ', this.comment);
    this.dialogRef.close({
      comment: this.comment
    });
  }

}
