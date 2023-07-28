import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonIds: any[];

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (data) => {
        //console.log(JSON.stringify(data));

        this.pokemonIds = [];
        data.results.forEach((element: any) => {
          this.pokemonIds.push(element.url.slice(0, -1).split('/').pop());
        });
      },
    });
  }
}
