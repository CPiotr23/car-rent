import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';
import { take } from 'rxjs';
import { RentDetailsDto } from 'src/app/models/RentDetailsDto';
import { RentFacade } from 'src/app/store/rent.facade';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {

  constructor(
    private router: Router,
    private rentFacade: RentFacade,
  ) { }

  public rentList: RentDetailsDto[] = [];

  public ngOnInit(): void {
    this.rentFacade.getRentList$().pipe(take(1)).subscribe((rentList) => {
      console.log(rentList);
    });
  }

  public addTransactionRedirect(): void {
    this.router.navigateByUrl("add-rent");
  }

}
