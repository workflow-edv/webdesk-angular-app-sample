import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

interface UserLogin {
  username: string;
  password: string;
  server: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      server: "",
      username: "",
      password: "",
    });
  }

  ngOnInit(): void { }

  async onSubmit(value: UserLogin): Promise<void> {
    this.loginForm.patchValue(value);
    await this.login(value);
    this.router.navigate(["booking"]);
  }

  async login(user: UserLogin): Promise<void> {
    const { LoginService, Http } = window.webdesksdk.tools;

    const baseURL = user.server;

    const reqConfig = {
      baseURL, timeout: 20000
    };
    const http = new Http(reqConfig);
    window.state.http = http;
    //
    const login = new LoginService({ baseURL });
    await login.doLogin(user.username, user.password);

  }
}
