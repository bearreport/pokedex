import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../env';
import { Pokemon } from './pokemon.model';
import { Observable, timer } from 'rxjs';
import { catchError, debounce, debounceTime } from 'rxjs/operators';

@Injectable()
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  //get all pokemon
  getPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${API_URL}/pokemons`).pipe(
      catchError((err) => {
        throw 'error!';
      })
    );
  }

  getSpecificPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${API_URL}/pokemons/${id}`).pipe(
      catchError((err) => {
        throw 'error!';
      })
    );
  }

  updatePokemon(id: string): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${API_URL}/pokemons/${id}`, {}).pipe(
      catchError((err) => {
        throw 'error!';
      })
    );
  }
}
