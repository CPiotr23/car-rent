import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { VechicleFacade } from "../store/vechicle/vechicle.facade";

@Injectable()
export class ClientDetailsGuard implements CanActivate {
    constructor(
        private vechicleFacade: VechicleFacade
    ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.vechicleFacade.getVechicleForm$().pipe(
            map((vechicleForm) => !!vechicleForm)
        );
    }
}