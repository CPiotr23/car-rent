import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { RentService } from "../../shared/services/rent.service";
import { fetchRentListActionStarted, fetchRentListActionSuccess, saveRentDetailsStarted, saveRentDetailsSuccess } from "./rent.actions";

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
                catchError((error) => { console.warn(error); return EMPTY})
            ))
        )
    );

    saveRentDetailsEffect$ = createEffect(() => this.actions$.pipe(
        ofType(saveRentDetailsStarted),
            mergeMap((payload) => this.rentService.saveRent$(payload.rentDto)
            .pipe(
                map(
                    () => saveRentDetailsSuccess()
                ),
                catchError((error) => { console.warn(error); return EMPTY; })
            )),
        )
    );

    constructor(
        private actions$: Actions,
        private rentService: RentService,
    ) {}
}