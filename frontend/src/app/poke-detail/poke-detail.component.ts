import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon/pokemon-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PokepicturesApiService } from '../pokepictures/pokepictures-api.service';
import { Pokemon } from '../pokemon/pokemon.model';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {
  public pokeId = this.route.snapshot.paramMap.get('id');
  public specificPokemon: Pokemon = {} as Pokemon;

  constructor(
    private pokemonApi: PokemonApiService,
    private route: ActivatedRoute
  ) {
    //get details for the specific pokemon you clicked on
    this.pokemonApi
      .getSpecificPokemon(this.pokeId as string)
      .subscribe((data) => {
        this.specificPokemon = data;
      });
  }

  ngOnInit(): void {}
}
