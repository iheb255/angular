import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UsercardcComponent } from './usercardc/usercardc.component';
import { ConfigsidebarComponent } from './configsidebar/configsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UsercardComponent,
    UsercardcComponent,
    ConfigsidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
