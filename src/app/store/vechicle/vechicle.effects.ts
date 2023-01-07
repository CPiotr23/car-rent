import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from "rxjs";
import { VechicleService } from "src/app/shared/services";
import { fetchAllVechiclesStarted, fetchAllVechiclesSuccess, fetchVechicleTypesStarted, fetchVechicleTypesSuccess } from "./vechicle.action";

@Injectable({
    providedIn: 'root',
})
export class VechicleEffects {

    getAllVechiclesEffect$ = createEffect(() => this.actions$.pipe(
        ofType(fetchAllVechiclesStarted),
        mergeMap(() => this.vechicleService.getAllVechicles$()
        .pipe(
            map(
                allVechicles => fetchAllVechiclesSuccess({ allVechicles })
            ),
            catchError((error) => { console.warn(error); return EMPTY; })
            )
        )
    ));

    getVechicleTypesEffect$ = createEffect(() => () => this.actions$.pipe(
        ofType(fetchVechicleTypesStarted),
        mergeMap(() => this.vechicleService.getVechicleTypes$()
        .pipe(
            map(
                vechicleTypes => fetchVechicleTypesSuccess({ vechicleTypes })
            ),
            catchError((error) => { console.warn(error); return EMPTY; })
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private vechicleService: VechicleService,
    ) {}
}