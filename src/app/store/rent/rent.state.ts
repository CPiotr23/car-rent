import { StateStatusType } from "src/app/models/StateStatus.type";
import { RentDetailsDto } from "../../models/RentDetailsDto.interface";

export interface RentState {
    rentList?: RentDetailsDto[];
    rentSavingStatus?: StateStatusType;
}

export const initialRentState: RentState = {
    rentList: undefined,
    rentSavingStatus: 'INITIAL',
}