import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AddRentComponent, RentDetailsComponent, RentListComponent } from './components';
import { routes } from './routes';
import { rentReducer } from './store/rent.reducers';
import { RentEffects } from './store/store.effects';


@NgModule({
  declarations: [
    AppComponent,
    RentDetailsComponent,
    AddRentComponent,
    RentListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    StoreModule.forRoot({ rentState: rentReducer }),
    ReactiveFormsModule,
    EffectsModule.forRoot([ RentEffects ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
