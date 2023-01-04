import { Routes } from "@angular/router";
import { AddRentComponent, RentListComponent } from "./components";

export const routes: Routes = [
    { path: '', component: RentListComponent },
    { path: 'add-rent', component: AddRentComponent },
  ];
  