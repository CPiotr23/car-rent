import { Component, Input, OnInit } from '@angular/core';
import { RentDetailsDto } from 'src/app/models/RentDetailsDto';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css', '../rent-list/rent-list.component.css']
})
export class RentDetailsComponent {
  @Input() public rentDetails: RentDetailsDto;
}
