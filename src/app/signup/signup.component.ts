import { Component } from '@angular/core';
import axios from "axios";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  error: any = false;
  errorMsg: any = "";

  constructor(private router: Router){}

  getData(name:any, email:any, tel: any, gender: any, password: any, confirmPassword: any){
    console.log(name, tel, gender, password, confirmPassword, email);
    var payload = {
      name: name,
      phone: tel,
      gender: gender,
      password: password,
      password_confirmation: confirmPassword,
      email: email
    }

    axios.post("https://revoldesigns.com/clients/bin-hamoodah/api/users", payload).then((res)=>{
      console.log(res);
      this.router.navigate(['/signin']);
    }).catch((e)=>{
      console.log(e);
      this.error = true;
      this.errorMsg = e.response.data.error;
    })
  }
}
