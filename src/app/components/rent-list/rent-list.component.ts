import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { RentDetailsDto } from 'src/app/models';
import { RentFacade } from 'src/app/store/rent';
import { VechicleFacade } from 'src/app/store/vechicle';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {

  constructor(
    private router: Router,
    private rentFacade: RentFacade,
    private vechicleFacade: VechicleFacade,
  ) { }

  public rentList: RentDetailsDto[] = [];
  public addButtonDisabled$: Observable<boolean>;

  public ngOnInit(): void {
    this.rentFacade.getRentList$().pipe(take(1)).subscribe((rentList) => {
      this.rentList = rentList;
    });

    this.addButtonDisabled$ = this.vechicleFacade.getAllVechicles$().pipe(map((vechicles) => !vechicles.length));
  }

  public addTransactionRedirect(): void {
    this.router.navigateByUrl("add-rent");
  }

}
