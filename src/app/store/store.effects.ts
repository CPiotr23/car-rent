import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { RentService } from "../shared/rent.service";
import { fetchRentListActionStarted, fetchRentListActionSuccess } from "./rent.actions";

@Injectable({
    providedIn: 'root',
})
export class RentEffects {

    getRentListEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fetchRentListActionStarted),
        mergeMap(() => this.rentService.getRentList$()
            .pipe(
                map(
                    rentList => fetchRentListActionSuccess({ rentList })
                ),
                catchError(() => { console.log('err'); return EMPTY})
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private rentService: RentService,
    ) {}
}