import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { filter, map, Observable, of, tap } from "rxjs";
import { RentDetailsDto } from "../models/RentDetailsDto";
import { fetchRentListActionStarted } from "./rent.actions";
import { RentState } from "./rent.state";

@Injectable({
    providedIn: 'root',
})
export class RentFacade {

    constructor(
        private store: Store<{ rentState: RentState }>,
    ) {

    }

    public getRentList$(): Observable<RentDetailsDto[]> {
        return this.store.select(
            (state: { rentState: RentState }) => state?.rentState.rentList
        ).pipe(
            tap((rentList) => {
                if(!rentList) {
                    this.store.dispatch(fetchRentListActionStarted())
                }
            }),
            filter((rentList) => !!rentList),
            map(result => result as RentDetailsDto[]),
        );
    }
}