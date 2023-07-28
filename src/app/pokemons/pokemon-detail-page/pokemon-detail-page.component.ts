import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';
import { PokemonAddCommentComponent } from '../pokemon-add-comment/pokemon-add-comment.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.scss'],
})
export class PokemonDetailPageComponent implements OnInit {
  pokemonData: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private firestore: AngularFirestore,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id = param.get('id');

      if (id) {
        console.log('id: ', id);
        this.pokemonService.getPokemonDetails(Number(id)).subscribe((ret) => {
          this.pokemonData = ret;
          console.log(JSON.stringify(this.pokemonData));
        });
      }
    });
  }

  showDialog() {
    let dialogRef = this.dialog.open(PokemonAddCommentComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(JSON.stringify(result));
      let comments = [];

      comments.push(result);
      /* this.firestore
        .collection('pokemons')
        .doc(this.pokemonData.id.toString())
        .set({
          comments: comments
        }, {
          merge: true
        }); */

      this.firestore
        .collection('pokemons')
        .doc(this.pokemonData.id.toString())
        .update({
          comments: comments
        });
    });
  }
}
