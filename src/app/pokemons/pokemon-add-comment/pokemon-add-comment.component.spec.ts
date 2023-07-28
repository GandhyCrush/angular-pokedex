import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAddCommentComponent } from './pokemon-add-comment.component';

describe('PokemonAddCommentComponent', () => {
  let component: PokemonAddCommentComponent;
  let fixture: ComponentFixture<PokemonAddCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonAddCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
