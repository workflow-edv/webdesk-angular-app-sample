import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  state = "none";
  constructor(public route: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
  }

  async onClick(): Promise<void> {
    const { BookingService } = window.webdesksdk.ta;

    const booking = new BookingService({ http: window.state.http });

    try {
      await booking.book();
    } catch (error) {
      /// alert(JSON.stringify(error, null, 4));
      console.error(error);
    }
  }
}
