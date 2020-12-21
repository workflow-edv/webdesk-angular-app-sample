import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BookingComponent } from "./booking/booking.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";

window.state = window.state || { http: null, booking: null }

import("node_modules/@webdesk/webdesk-tools-websdk/dist/webdesk-tools-websdk.js");
import("node_modules/@webdesk/webdesk-ta-websdk/dist/webdesk-ta-websdk.js");

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
