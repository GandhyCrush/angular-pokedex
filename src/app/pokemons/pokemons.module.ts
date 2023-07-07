import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PokemonListComponent, PokemonListByTypeComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule.forChild([
      { path: 'pokemon-list', component: PokemonListComponent },
      {
        path: 'pokemon-list-by-type/:id',
        component: PokemonListByTypeComponent,
      },
    ]),
  ],
})
export class PokemonsModule {}
