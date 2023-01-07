import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter, map, Observable, tap } from "rxjs";
import { RentService } from "src/app/shared/services/rent.service";
import { RentDetailsDto } from "../../models/RentDetailsDto.interface";
import { fetchRentListActionStarted, saveRentDetailsStarted } from "./rent.actions";
import { selectRentList, selectRentSavingStatus } from "./rent.selectors";
import { RentState } from "./rent.state";

@Injectable({
    providedIn: 'root',
})
export class RentFacade {

    constructor(
        private store: Store<{ rentState: RentState }>,
        private rentService: RentService,
    ) {

    }

    public getRentList$(): Observable<RentDetailsDto[]> {
        return this.store.pipe(select(selectRentList)).pipe(
            tap((rentList) => {
                if(!rentList) {
                    this.store.dispatch(fetchRentListActionStarted())
                }
            }),
            filter((rentList) => !!rentList),
            map(result => result as RentDetailsDto[]),
        );
    }

    public saveRent$(rentDto: RentDetailsDto): Observable<boolean> {
        this.store.dispatch(saveRentDetailsStarted({ rentDto }));
        return this.store.pipe(select(selectRentSavingStatus)).pipe(
            filter((savingStatus) => savingStatus === 'DONE'),
            map(() => true)
        );
    }
}