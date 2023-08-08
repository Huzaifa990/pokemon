import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  error: any = false;
  errorMsg: any = '';
  client_id = '99d56f19-f2e9-47af-984a-4b2d5ba5714c';
  client_secret = '7LGUTu83huLu1sh8mTqhiGljdDEuAJjt37tM5vhz';

  constructor(private router: Router) {}

  getData2(email: any, password: any) {
    var payload = {
      password: password,
      username: email,
      client_id: this.client_id,
      client_secret: this.client_secret,
      grant_type: 'password',
      scope: 'manage-account',
    };

    axios
      .post(
        'https://revoldesigns.com/clients/bin-hamoodah/api/oauth/token',
        payload
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          'user_auth',
          JSON.stringify(res.data.access_token)
        );
        window.location.href = 'http://localhost:4200/';
      })
      .catch((e) => {
        console.log(e);
        this.error = true;
        this.errorMsg = e.response.data.error_description;
      });
  }
}
