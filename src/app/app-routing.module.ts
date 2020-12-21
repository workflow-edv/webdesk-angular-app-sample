import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookingComponent } from "./booking/booking.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "booking", component: BookingComponent, },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
