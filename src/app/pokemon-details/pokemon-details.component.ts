import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{
  receivedData: any;
  pokemonData:any = {};

  constructor(private route: ActivatedRoute,private dataService: DataService, private router: Router) {}

  ngOnInit(): void {

    if(!localStorage.getItem("user_auth")){
      this.router.navigate(['/signin'])
    }

    this.route.queryParams.subscribe((params:any)=>{
      this.receivedData = params.data
    })

    this.dataService.getSinglePokemon(this.receivedData).subscribe((item)=>{
      console.log(item);
      this.pokemonData = item;
    })

  }
}
