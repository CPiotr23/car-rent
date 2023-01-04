import { createReducer, on } from "@ngrx/store";
import { fetchRentListActionSuccess } from "./rent.actions";
import { initialRentState } from "./rent.state";

export const rentReducer = createReducer(
    initialRentState,
    on(fetchRentListActionSuccess, (state, payload) => ({
        ...state,
        rentList: payload.rentList,
    })),
);