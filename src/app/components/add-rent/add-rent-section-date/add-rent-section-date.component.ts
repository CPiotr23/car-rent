import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateTime } from 'luxon';
import { combineLatest, distinctUntilChanged, pairwise, startWith } from 'rxjs';

@Component({
  selector: 'app-add-rent-section-date',
  templateUrl: './add-rent-section-date.component.html',
  styleUrls: ['./add-rent-section-date.component.css']
})
export class AddRentSectionDateComponent implements OnInit {

  @Input() public selectedVechicleForm: FormGroup;

  public ngOnInit(): void {
    this.watchDates();
  }

  private watchDates(): void {
    const startDate = this.selectedVechicleForm.get('startRentDate');
    const endDate = this.selectedVechicleForm.get('endRentDate');
    const days = this.selectedVechicleForm.get('rentDurationDays');
    combineLatest([
      startDate?.valueChanges.pipe(startWith(startDate.value)),
      endDate?.valueChanges.pipe(startWith(endDate.value)),
      days?.valueChanges.pipe(startWith(days.value)),
    ]).pipe(
      distinctUntilChanged((prevValues, currValues) => JSON.stringify(prevValues) === JSON.stringify(currValues)),
      pairwise(),
    ).subscribe(([dateValuesPrev, dateValuesCurr]) => {
      if((dateValuesPrev[0] !== dateValuesCurr[0] || dateValuesPrev[1] !== dateValuesCurr[1]) && !!dateValuesCurr[0] && !!dateValuesCurr[1]) {
        this.setDurationDays(dateValuesCurr[0], dateValuesCurr[1]);
      } else if (dateValuesPrev[2] !== dateValuesCurr[2] && !!dateValuesCurr[0] && !!dateValuesCurr[2]) {
        this.setEndDate(dateValuesCurr[0], dateValuesCurr[2]);
      }
    });
  }

  private setDurationDays(startDate: string, endDate: string): void {
    const calculatedDuration = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24) >= 0 
      ? (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24) + 1
      : 0;
    this.selectedVechicleForm.get('rentDurationDays').setValue(
      calculatedDuration, { emitEvent: false }
    );
  }

  private setEndDate(startDate: string, duration: number): void {
    this.selectedVechicleForm.get('endRentDate').setValue(
      DateTime.fromISO(startDate).plus({ days: duration }).toISODate(), { emitEvent: false }
    );
  }

}
