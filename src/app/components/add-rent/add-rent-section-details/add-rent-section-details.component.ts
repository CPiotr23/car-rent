import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-rent-section-details',
  templateUrl: './add-rent-section-details.component.html',
  styleUrls: ['./add-rent-section-details.component.css']
})
export class AddRentSectionDetailsComponent {
  @Input() public selectedVechicleForm: FormGroup;
}
