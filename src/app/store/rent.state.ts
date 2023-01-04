import { RentDetailsDto } from "../models/RentDetailsDto";

export interface RentState {
    rentList?: RentDetailsDto[];
}

export const initialRentState: RentState = {
    rentList: undefined,
}