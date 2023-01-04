import { createAction, props } from "@ngrx/store";
import { RentDetailsDto } from "../models/RentDetailsDto";

export const fetchRentListActionStarted = createAction('[Rent List] fetchRentList');
export const fetchRentListActionSuccess = createAction('[Rent List] fetchRentListSuccess', props<{ rentList: RentDetailsDto[] }>());
export const fetchRentListActionFailed = createAction('[Rent List] fetchRentListError', props<{ error: string }>());