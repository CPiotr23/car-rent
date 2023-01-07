import { createAction, props } from "@ngrx/store";
import { RentDetailsDto } from "../../models/RentDetailsDto.interface";

export const fetchRentListActionStarted = createAction('[Rent List] fetchRentList');
export const fetchRentListActionSuccess = createAction('[Rent List] fetchRentListSuccess', props<{ rentList: RentDetailsDto[] }>());
export const saveRentDetailsStarted = createAction('[Rent List] saveRentDetails', props<{ rentDto: RentDetailsDto }>());
export const saveRentDetailsSuccess = createAction('[Rent List] saveRentDetailsSuccess');