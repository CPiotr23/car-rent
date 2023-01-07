import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { 
  AddRentComponent, 
  RentDetailsComponent, 
  RentListComponent,
  AddRentSectionVechicleComponent,
  AddRentSectionDetailsComponent,
  AddRentSectionDateComponent,
  ClientRentDetailsComponent 
} from './components';
import { routes } from './routes';
import { rentReducer, RentEffects } from './store/rent';
import { HttpClientModule } from "@angular/common/http";
import { RentListGuard, AddRentGuard, ClientDetailsGuard } from './guards';
import { vechicleReducer, VechicleEffects } from './store/vechicle';


@NgModule({
  declarations: [
    AppComponent,
    RentDetailsComponent,
    AddRentComponent,
    RentListComponent,
    AddRentSectionVechicleComponent,
    AddRentSectionDetailsComponent,
    AddRentSectionDateComponent,
    ClientRentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    StoreModule.forRoot({ rentState: rentReducer, vechicleState: vechicleReducer }),
    ReactiveFormsModule,
    EffectsModule.forRoot([ RentEffects, VechicleEffects ]),
    HttpClientModule,
  ],
  providers: [RentListGuard, AddRentGuard, ClientDetailsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
