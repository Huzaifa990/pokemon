import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  // Get Pokemons 
   getPokemons(limit: number, offset: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }
  // Get more (Pagination)
  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  //Get By Id 
  getSinglePokemon(id){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  // Search by name
  getQuery(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
