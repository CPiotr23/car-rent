import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { VechicleDto } from "../../models/VechicleDto.interface";
import { VechicleType } from "../../models/VechicleType.interface";

@Injectable({
    providedIn: 'root',
})
export class VechicleService {

    private url = 'http://localhost:3000';

    constructor(
      private httpClient: HttpClient,
    ) { }

    public getVechicleTypes$(): Observable<VechicleType[]> {
        return this.httpClient.get<VechicleType[]>(this.url + '/vechicle-type');
    }

    public getAllVechicles$(): Observable<VechicleDto[]> {
        return this.httpClient.get<VechicleDto[]>(this.url + '/vechicles');
    }
}