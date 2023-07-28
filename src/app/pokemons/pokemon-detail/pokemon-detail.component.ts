import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemonDetail: string;
 
  /*
  pokemonName: string;
  pokemonImageUrl: string;
  */
 pokemonData: any;

  constructor(
    private pokemonService: PokemonService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetails(Number(this.pokemonDetail))
      .subscribe({
        next: (data) => {
          //this.pokemonName = data.name;
          //this.pokemonImageUrl = data.sprites.front_default;
          this.pokemonData = data;

          //console.log(JSON.stringify(data));
          /*
          this.firestore //Para agregar elementos con id autogenerado
            .collection('pokemons')
            .add({
              id: data.id,
              name: data.name,
            })
            .then((res) => {
              console.log(res);
            })
            .catch((e) => {
              console.log(e);
            });
            */
          this.firestore.collection('pokemons').doc(data.id.toString()).set({
            name: data.name,
            
          });
        },
      });
  }
}
