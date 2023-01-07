import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { RentFacade } from "../store/rent/rent.facade";

@Injectable()
export class RentListGuard implements CanActivate {
    constructor(
        private rentFacade: RentFacade
    ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.rentFacade.getRentList$().pipe(
            map((rentList) => rentList !== undefined)
        );
    }
}