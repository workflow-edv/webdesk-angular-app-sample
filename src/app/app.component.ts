import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Http, LoginService } from '@webdesk/webdesk-tools-websdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

interface UserLogin {
  username: string;
  password: string;
  server: string;
}

export class AppComponent {
  title = 'webdesk-angular-sdkApp';
  loginForm;
  http = new Http();

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      server: '',
      username: '',
      password: '',
    });
  }

  onSubmit(value: { [key: string]: any; }): void {
    console.log(value);
    this.loginForm.patchValue(value);
  }


  login(user: UserLogin): void {
    const baseURL = user.server;
    const login = new LoginService({ baseURL });
    login.doLogin(user.username, user.password);
  }
}
