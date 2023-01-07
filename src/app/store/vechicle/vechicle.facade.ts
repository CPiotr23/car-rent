import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter, map, Observable, tap } from "rxjs";
import { VechicleDto } from "src/app/models/VechicleDto.interface";
import { VechicleType } from "src/app/models/VechicleType.interface";
import { VechicleService } from "src/app/shared/services/vechicle.service";
import { fetchAllVechiclesStarted, fetchVechicleTypesStarted, resetFormState, saveCurrentFormState } from "./vechicle.action";
import { selectAddVechicleFormState, selectAllVechicles, selectVechicleTypes } from "./vechicle.selectors";
import { VechicleState } from "./vechicle.state";

@Injectable({
    providedIn: 'root',
})
export class VechicleFacade {
    constructor(
        private vechicleStore: Store<{ vechicleState: VechicleState }>,
    ) {}

    public getVechicleType$(): Observable<VechicleType[]> {
        return this.vechicleStore.pipe(select(selectVechicleTypes)).pipe(
            tap((vechicleTypes) => {
                if(!vechicleTypes) {
                    this.vechicleStore.dispatch(fetchVechicleTypesStarted())
                }
            }),
            filter((vechicleTypes) => !!vechicleTypes),
            map(result => result as VechicleType[]),
        );
    }

    public getAllVechicles$(): Observable<VechicleDto[]> {
        return this.vechicleStore.pipe(select(selectAllVechicles)).pipe(
            tap((allVechicles) => {
                if(!allVechicles) {
                    this.vechicleStore.dispatch(fetchAllVechiclesStarted())
                }
            }),
            filter((vechicles) => !!vechicles),
            map(result => result as VechicleDto[]),
        );
    }

    public saveVechicleForm(addVechicleForm: VechicleDto): void {
        this.vechicleStore.dispatch(saveCurrentFormState({ addVechicleForm }));
    }

    public getVechicleForm$(): Observable<VechicleDto> {
      return this.vechicleStore.pipe(select(selectAddVechicleFormState));
    }

    public resetFormState(): void {
        this.vechicleStore.dispatch(resetFormState());
    }
}