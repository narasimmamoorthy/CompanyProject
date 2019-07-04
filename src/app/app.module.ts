import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MustMatchDirective } from './helpers/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
