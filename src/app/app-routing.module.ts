import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
  ,
  {
    path: 'pokemonDetails',
    component: PokemonDetailsComponent
  },
  {
    path: 'searchResults',
    component: SearchResultsComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'signin',
    component: SigninComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
