import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon/pokemon-api.service';
import { Pokemon } from '../pokemon/pokemon.model';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title: string = 'pokedex';
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  loading: boolean = true;
  searchTerm: string = '';

  public delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  public sortPokemon(): void {
    this.pokemons.sort((a, b) => {
      return a.id - b.id;
    });
  }

  public searchPokemon(value: string): void {
    this.filteredPokemons = this.pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    }, 'test');
  }

  constructor(private pokemonApi: PokemonApiService) {}

  ngOnInit(): void {
    this.delay(2000).then(() => {
      (this.loading = false),
        this.pokemonApi.getPokemon().subscribe((pokemon) => {
          this.pokemons = pokemon;
          this.sortPokemon();
          this.filteredPokemons = this.pokemons;
        });
    });
  }
}
