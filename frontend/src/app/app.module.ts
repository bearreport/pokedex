import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PokepicturesApiService } from './pokepictures/pokepictures-api.service';
import { PokemonApiService } from './pokemon/pokemon-api.service';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, PokeDetailComponent, DashboardComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [PokepicturesApiService, PokemonApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
