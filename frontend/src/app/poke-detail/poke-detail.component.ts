import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../pokemon/pokemon-api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MatPseudoCheckbox } from '@angular/material/core';
import { PokepicturesApiService } from '../pokepictures/pokepictures-api.service';
import { Pokemon } from '../pokemon/pokemon.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
})
export class PokeDetailComponent implements OnInit {
  public pokeId = this.route.snapshot.paramMap.get('id') as string;
  public specificPokemon: Pokemon = {} as Pokemon;

  constructor(
    public auth: AuthService,
    private http: HttpClient,
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

  public updatePokemon(): void {
    this.pokemonApi.updatePokemon(this.pokeId).subscribe((data) => {
      this.specificPokemon = data;
    });
  }

  ngOnInit(): void {}
}
