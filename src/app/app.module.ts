import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyTeammateListComponent } from './my-teammate-list/my-teammate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTeammateListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
