import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListByTypeComponent } from './pokemon-list-by-type.component';

describe('PokemonListByTypeComponent', () => {
  let component: PokemonListByTypeComponent;
  let fixture: ComponentFixture<PokemonListByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListByTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
