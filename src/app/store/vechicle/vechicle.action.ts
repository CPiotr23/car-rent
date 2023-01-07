import { createAction, props } from "@ngrx/store";
import { VechicleType } from "src/app/models";
import { VechicleDto } from "src/app/models/VechicleDto.interface";

export const saveCurrentFormState = createAction('[Rent Add] saveVechicleForm', props<{ addVechicleForm: VechicleDto }>());

export const resetFormState = createAction('[Rent] resetFormState');

export const fetchAllVechiclesStarted = createAction('[Rent] fetchAllVechicles');
export const fetchVechicleTypesStarted = createAction('[Rent] fetchVechicleTypes');

export const fetchAllVechiclesSuccess = createAction('[Rent] fetchAllVechiclesSucces', props<{ allVechicles: VechicleDto[] }>());
export const fetchVechicleTypesSuccess = createAction('[Rent] fetchVechicleTypesSuccess', props<{ vechicleTypes: VechicleType[] }>());