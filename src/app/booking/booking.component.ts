import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
  }
}
