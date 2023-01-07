import { createReducer, on } from "@ngrx/store";
import { fetchAllVechiclesSuccess, fetchVechicleTypesSuccess, resetFormState, saveCurrentFormState } from "./vechicle.action";
import { initialVechicleState } from "./vechicle.state";

export const vechicleReducer = createReducer(
    initialVechicleState,
    on(saveCurrentFormState, (state, payload) => ({
        ...state,
        addVechicleForm: payload.addVechicleForm,
    })),
    on(resetFormState, (state) => ({
        ...state,
        addVechicleForm: undefined,
    })),
    on(fetchAllVechiclesSuccess, (state, payload) => ({
        ...state,
        allVechicles: payload.allVechicles,
    })),
    on(fetchVechicleTypesSuccess, (state, payload) => ({
        ...state,
        vechicleTypes: payload.vechicleTypes,
    })),
);