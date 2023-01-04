import { DateTime } from 'luxon';

export interface RentDetailsDto {
    id: number;
    firstName: string;
    lastName: string;
    vechicleType: string;
    vechicleMark: string;
    registrationNumber: string;
    rentDate: DateTime;
    returnDate: DateTime;
}