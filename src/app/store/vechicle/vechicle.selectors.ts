import { createSelector } from "@ngrx/store";
import { VechicleState } from "./vechicle.state";

export const selectVechicleState  = (state: { vechicleState: VechicleState }) => state.vechicleState;

export const selectAddVechicleFormState = createSelector(
    selectVechicleState,
    (state: VechicleState) => state.addVechicleForm
);

export const selectAllVechicles = createSelector(
    selectVechicleState,
    (state: VechicleState) => state.allVechicles
);

export const selectVechicleTypes = createSelector(
    selectVechicleState,
    (state: VechicleState) => state.vechicleTypes
)