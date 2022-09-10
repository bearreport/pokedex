import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon/pokemon-api.service';
import { Pokemon } from '../pokemon/pokemon.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'pokedex';
  pokemons: Pokemon[] = [];

  constructor(private pokemonApi: PokemonApiService) {
    this.pokemonApi.getPokemon().subscribe((pokemon) => {
      this.pokemons = pokemon;
    });
  }

  ngOnInit(): void {}
}
