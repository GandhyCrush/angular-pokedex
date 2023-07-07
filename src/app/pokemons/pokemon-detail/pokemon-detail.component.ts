import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input()
  pokemonDetail: string;

  pokemonName: string;
  pokemonImageUrl: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetails(Number(this.pokemonDetail))
      .subscribe({
        next: (data) => {
          this.pokemonName = data.name;
          this.pokemonImageUrl = data.sprites.front_default;
        },
      });
  }
}
