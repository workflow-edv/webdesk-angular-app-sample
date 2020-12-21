import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import Axios from "axios";

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
    try {
      await this.login(value);
      this.router.navigate(["booking"]);
    } catch (error) {
      alert(JSON.stringify(error, null, 4));
    }
  }

  async login(user: UserLogin): Promise<void> {
    const { LoginService } = window.webdesksdk.tools;
    const { BookingService } = window.webdesksdk.ta;

    const baseURL = user.server;

    const reqConfig = {
      baseURL, timeout: 20000, withCredentials: true,
    };
    const http = Axios.create(reqConfig);

    //
    const login = new LoginService({ baseURL });
    const booking = new BookingService({ http });
    const session = await login.doLogin(user.username, user.password);
    // await login.logout();
    console.log(session);
    await booking.getCurrentState();

    await http.get("rest/ta/bookings/state", reqConfig);
  }
}
