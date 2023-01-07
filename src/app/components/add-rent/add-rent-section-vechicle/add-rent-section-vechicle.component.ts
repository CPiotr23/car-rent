import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, map, Observable, startWith } from 'rxjs';
import { VechicleDto, VechicleType  } from 'src/app/models';

@Component({
  selector: 'app-add-rent-section-vechicle',
  templateUrl: './add-rent-section-vechicle.component.html',
  styleUrls: ['./add-rent-section-vechicle.component.css']
})
export class AddRentSectionVechicleComponent implements OnInit {
  @Input() public addRentForm: FormGroup;
  @Input() public vechicles: VechicleDto[];
  @Input() public vechicleTypes: VechicleType[];

  public filteredVechicles$: Observable<VechicleDto[]>;

  public ngOnInit(): void {
    this.filteredVechicles$ = this.filterVechicles$();
    this.watchVechicleType();
  }

  public filterVechicles$(): Observable<VechicleDto[]> {
    return this.addRentForm.get('vechicleType')!.valueChanges.pipe(
      startWith(this.addRentForm.get('vechicleType').value),
      map((type) => this.vechicles.filter((vechicle) => vechicle.vechicleTypeCde === type)),
    );
  }

  private watchVechicleType(): void {
    this.addRentForm.get('vechicleType')?.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      this.addRentForm.get('vechicleModel')?.setValue(null);
    });
  }

}
