import { Routes } from "@angular/router";
import { AddRentComponent, RentListComponent, ClientRentDetailsComponent } from "./components";
import { AddRentGuard, ClientDetailsGuard, RentListGuard  } from "./guards";

export const routes: Routes = [
    { path: '', component: RentListComponent, canActivate: [RentListGuard] },
    { path: 'add-rent', component: AddRentComponent, canActivate: [AddRentGuard] },
    { path: 'client-details', component: ClientRentDetailsComponent, canActivate: [ClientDetailsGuard] },
  ];
  