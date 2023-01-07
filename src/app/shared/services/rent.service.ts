import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RentDetailsDto } from "../../models";

@Injectable({
    providedIn: 'root',
})
export class RentService {

    private url = 'http://localhost:3000/rent-list'

    constructor(
      private httpClient: HttpClient,
    ) { }

    public getRentList$(): Observable<RentDetailsDto[]> {
        return this.httpClient.get<RentDetailsDto[]>(this.url);
    }

    public saveRent$(saveRent: RentDetailsDto): Observable<RentDetailsDto> {
        return this.httpClient.post<RentDetailsDto>(this.url, saveRent);
    }
}