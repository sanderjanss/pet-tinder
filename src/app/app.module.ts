import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {RouterModule} from "@angular/router";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {HttpClientModule} from "@angular/common/http";
import { NameFilterPipe } from './pipes/name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SetupDateComponent } from './date/setup-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe,
    SetupDateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule.forRoot([]),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
