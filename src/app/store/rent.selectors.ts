import { createSelector } from "@ngrx/store";
import { RentState } from "./rent.state";

export const selectRentState = (state: { rentState: RentState }) => state.rentState;

export const selectRentList = createSelector(
    selectRentState,
    (state: RentState) => state.rentList
);