import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookingService } from "@webdesk/webdesk-ta-websdk";

interface Worktimes {
  date: Date;
  leftHours: number;
  targetHours: number;
  workedHours: number;
}
@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})

export class BookingComponent implements OnInit {
  state = "none";
  worktimes: Partial<Worktimes> = {
    date: new Date(),
    leftHours: 0,
    targetHours: 0,
    workedHours: 0
  };
  constructor(public route: ActivatedRoute, public router: Router) { }

  async ngOnInit(): Promise<void> {

    if (!window.state.http?.baseURL) { return; }

    const booking = new BookingService({ http: window.state.http });

    const result = await booking.getCurrentState();
    this.state = result.attendanceState;
    this.worktimes = result.workTimes;
    console.log(result);
  }

  async onClick(): Promise<void> {

    const booking = new BookingService({ http: window.state.http });

    try {
      const result = await booking.book();
      this.state = result.attendanceState;
      this.worktimes = result.workTimes;
      console.log(result);
    } catch (error) {
      /// alert(JSON.stringify(error, null, 4));
      console.error(error);
    }
  }

  back(): void {
    this.router.navigate(["login"]);
  }
}
