import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

interface UserLogin {
  username: string;
  password: string;
  server: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  title = "webdesk-angular-sdkApp";
  loginForm;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      server: "",
      username: "",
      password: "",
    });
  }

  onSubmit(value: UserLogin): void {
    console.log(value);
    this.loginForm.patchValue(value);
    this.login(value);
  }

  login(user: UserLogin): void {
    const { moment, LoginService } = webdesksdk.tools;
    const baseURL = user.server;

    const date = moment();
    console.log(date);

    const login = new LoginService({ baseURL });
    login.doLogin(user.username, user.password);

    //  const booking = new BookingService();
  }
}
