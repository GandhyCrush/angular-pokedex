import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /*
  categories = [
    {
      id: '1',
      name: 'Normal',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=normal',
    },
    {
      id: '2',
      name: 'Fighting',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=fighting',
    },
    {
      id: '3',
      name: 'Flying',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=flying',
    },
    {
      id: '4',
      name: 'Poison',
      imageUrl:
        'https://ui-avatars.com/api/?font-size=0.33&size=300&name=poison',
    },
  ];*/

  constructor(private http: HttpClient) {}

  getPokemonTypes(): Observable<any> {
    //return of(this.categories).pipe(delay(5000));
    return this.http.get(`${environment.pokedexBaseUrl}/type`);
  }

  getPokemonDetailsType(id: number): Observable<any> {
    return this.http.get(`${environment.pokedexBaseUrl}/type/${id}`);
    //'https://pokeapi.co/api/v2/type/' + id;
  }

}
