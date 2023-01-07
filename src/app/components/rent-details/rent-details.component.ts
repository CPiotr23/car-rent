import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';
import { RentDetailsDto } from 'src/app/models';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css', '../rent-list/rent-list.component.css']
})
export class RentDetailsComponent {
  @Input() public rentDetails: RentDetailsDto;

  public getStatusClass(endRent: string): string {
    const date = DateTime.fromISO(endRent);
    if(DateTime.now() > date) {
      return "ended_status";
    } else {
      return date.minus({ days: 2 }) < DateTime.now() ? "warn_status" : "positive_status";
    }
  }
}
