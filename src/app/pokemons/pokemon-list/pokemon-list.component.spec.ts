import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from 'src/app/pokemon.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

let pokemonResults = {
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
  ],
};

fdescribe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let mockPokemonService;

  beforeEach(async () => {
    mockPokemonService = jasmine.createSpyObj<PokemonService>([
      'getPokemonList',
    ]);

    mockPokemonService.getPokemonList.and.callFake(() => {
      return of(pokemonResults);
    });

    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
