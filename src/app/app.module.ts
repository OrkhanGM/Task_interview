import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BProducteditComponent } from './components/b-productedit/b-productedit.component';
import { AWrapperComponent } from './components/a-wrapper/a-wrapper.component';
import { CProductsComponent } from './components/a-wrapper/c-products/c-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    BProducteditComponent,
    AWrapperComponent,
    CProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
