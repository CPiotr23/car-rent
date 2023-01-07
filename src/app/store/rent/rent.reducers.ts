import { createReducer, on } from "@ngrx/store";
import { fetchRentListActionSuccess, saveRentDetailsStarted, saveRentDetailsSuccess } from "./rent.actions";
import { initialRentState } from "./rent.state";

export const rentReducer = createReducer(
    initialRentState,
    on(fetchRentListActionSuccess, (state, payload) => ({
        ...state,
        rentList: payload.rentList,
    })),
    on(saveRentDetailsStarted, (state) => ({
        ...state,
        rentSavingStatus: 'STARTED',
    })),
    on(saveRentDetailsSuccess, (state) => ({
        ...state,
        rentList: undefined,
        rentSavingStatus: 'DONE',
    })),
);