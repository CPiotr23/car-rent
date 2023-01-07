import { VechicleType, VechicleDto  } from "src/app/models";

export interface VechicleState {
    addVechicleForm: VechicleDto;
    vechicleTypes: VechicleType[];
    allVechicles: VechicleDto[];
}

export const initialVechicleState: VechicleState = {
    addVechicleForm: undefined,
    vechicleTypes: undefined,
    allVechicles: undefined,
}