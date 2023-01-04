import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.css']
})
export class AddRentComponent implements OnInit {

  public vechicleTypes = [
    { id: 1, type: "samochód osobowy" },
    { id: 2, type: "motor" },
  ];

  public addRentForm = new FormGroup({
    vechicleType: new FormControl(null),
    vechicleModel: new FormControl(null),
  });

  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
  }

  public getSummaryCost(): number {
    return 0;
  }

  public redirectToList(): void {
    this.router.navigateByUrl("");
  }

  public redirectToNextStep(): void {
    console.log(this.addRentForm.value);
  }

}
