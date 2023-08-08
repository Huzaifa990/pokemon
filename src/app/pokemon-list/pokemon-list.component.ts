import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  pokemon: any[] = [];
  page = 1;
  totalPokemons: number;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    if(!localStorage.getItem("user_auth")){
      this.router.navigate(['/signin'])
    }
    this.getPokemons();
  }

  test(id) {
   
    this.router.navigate(['/pokemonDetails'],{queryParams: {data:id}});
  }

  getPokemons() {
    this.dataService
      .getPokemons(10, this.page + 0)
      .subscribe((response: any) => {
        console.log(response);
        this.totalPokemons = response.count;
        response.results.forEach((element: any) => {
          this.dataService
            .getMoreData(element.name)
            .subscribe((uniqueRes: any) => {
              this.pokemon.push(uniqueRes);
              console.log(this.pokemon);
            });
        });
      });
  }
}
