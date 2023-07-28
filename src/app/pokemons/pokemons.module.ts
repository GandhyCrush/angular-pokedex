import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';
import { PokemonFavoriteComponent } from './pokemon-favorite/pokemon-favorite.component';
import { MatIconModule } from '@angular/material/icon';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { PokemonDetailPageComponent } from './pokemon-detail-page/pokemon-detail-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonAddCommentComponent } from './pokemon-add-comment/pokemon-add-comment.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonListByTypeComponent,
    PokemonDetailComponent,
    PokemonFavoriteComponent,
    MyFavoritesComponent,
    PokemonDetailPageComponent,
    PokemonAddCommentComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      { path: 'pokemon-list', component: PokemonListComponent },
      { path: 'pokemon-my-favorites', component: MyFavoritesComponent },
      {
        path: 'pokemon-list-by-type/:id',
        component: PokemonListByTypeComponent,
      },
      { path: 'pokemon-details/:id', component: PokemonDetailPageComponent },
    ]),
  ],
})
export class PokemonsModule {}
