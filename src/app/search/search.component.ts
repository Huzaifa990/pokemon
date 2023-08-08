import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor( private router: Router){}
  
  getValue(val:string){
    if(val.trim() !== ""){
      this.router.navigate(['/searchResults'],{queryParams: {data:val}});
    }
    else{
      alert("Please enter a Pokemon name!");
    }
  }

  goToHome(){
    this.router.navigate(['/'])
  }
}
