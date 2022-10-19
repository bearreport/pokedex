import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pokedetail/:id', component: PokeDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
