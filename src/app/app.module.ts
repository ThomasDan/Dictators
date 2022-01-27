import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DictatorsComponent } from './dictators/dictators.component';
import { DictatorComponent } from './dictators/dictator/dictator.component';
import { DictatorCreationComponent } from './dictators/dictator/dictator-creation/dictator-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    DictatorsComponent,
    DictatorComponent,
    DictatorCreationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
