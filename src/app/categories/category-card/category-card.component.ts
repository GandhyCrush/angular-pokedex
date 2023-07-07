import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input()
  pokemonType: any;

  imageUrl: String;

  categoryType: string;

  constructor() {}

  ngOnInit(): void {
    console.log('PokemonType', JSON.stringify(this.pokemonType));
    this.imageUrl = `https://ui-avatars.com/api/?font-size=0.33&size=300&name=${this.pokemonType.name}`;
    //https://pokeapi.co/api/v2/type/4/
    //https://pokeapi.co/api/v2/type/details/4/
    //https://pokeapi.co/api/v2/type/4 -> slice(0,-1)

    //https: -> 0
    //'' -> 1
    //pokeapi.co ->2
    //api ->3
    //v2->4
    //type->5
    //4 ->6
    //this.categoryType = this.pokemonType.url.split('/')[6];
    https: this.categoryType = this.pokemonType.url
      .slice(0, -1)
      .split('/')
      .pop();
  }
}
