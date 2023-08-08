import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{
  receivedData: any;
  pokemonData:any = {};
  error = false;
  constructor(private route: ActivatedRoute, private dataservice: DataService,){}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      this.receivedData = params.data
    })

    this.getData();
  }

  getData(){
    this.dataservice.getQuery(this.receivedData).subscribe(
      (item)=>{
      this.pokemonData = item;
      console.log(this.pokemonData)
      },
      (error: any) => {
        console.error('Component Error:', error);
        this.error = true;
      }
    )
  }


}
