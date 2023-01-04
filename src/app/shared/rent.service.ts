import { Injectable } from "@angular/core";
import { DateTime } from "luxon";
import { Observable, of } from "rxjs";
import { RentDetailsDto } from "../models/RentDetailsDto";

@Injectable({
    providedIn: 'root',
})
export class RentService {

    constructor() {

    }

    public getRentList$(): Observable<RentDetailsDto[]> {
        return of([
            {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 2,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark:'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
              {
                id: 1,
                firstName: 'string',
                lastName: 'string',
                vechicleType: 'string',
                vechicleMark: 'string',
                registrationNumber:'string',
                rentDate: DateTime.now(),
                returnDate: DateTime.now(),    
              },
        ]);
    }
}