import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as dotenv from 'dotenv';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { PokepicturesApiService } from './pokepictures/pokepictures-api.service';
import { PokemonApiService } from './pokemon/pokemon-api.service';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeDetailComponent,
    DashboardComponent,
    LoginComponent,
    SpinnerComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    AuthModule.forRoot({
      domain: 'dev-mcp-npkg.us.auth0.com',
      clientId: 'R1NMGkuSjf19jo7NUAa4NZWlPUJ3UMXh',
    }),
    BrowserAnimationsModule,
  ],
  providers: [PokepicturesApiService, PokemonApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
