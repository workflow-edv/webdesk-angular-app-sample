import { Http, LoginService } from "@webdesk/webdesk-tools-websdk";

import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { IHttpConfig } from "@webdesk/webdesk-tools-websdk/dist/tools/http/http";

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

  async onNTLMSubmit(value: UserLogin): Promise<void> {
    this.loginForm.patchValue(value);
    await this.NTLMLogin(value);
    this.router.navigate(["booking"]);
  }

  async login(user: UserLogin): Promise<void> {
    const baseURL = user.server;

    const reqConfig: IHttpConfig = {
      baseURL,
      requestConfig: {
        withCredentials: true
      }
    };

    const http = new Http(reqConfig);
    window.state.http = http;

    http.getServerInfo();
    const login = new LoginService({ baseURL });
    await login.doLogin(user.username, user.password);

  }

  async NTLMLogin(user: UserLogin): Promise<void> {
    const baseURL = user.server;

    const reqConfig: IHttpConfig = {
      baseURL,
      requestConfig: {
        withCredentials: true
      }
    };

    const http = new Http(reqConfig);
    window.state.http = http;

    const response = await http.get("getLoginInfos.do?format=json");
    console.log(response);

  }
}
