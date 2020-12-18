import { UsercardcComponent } from './usercardc/usercardc.component';
import { ConfigsidebarComponent } from './configsidebar/configsidebar.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:'configsidebar' , component:ConfigsidebarComponent},
{path:'usercard' , component:UsercardcComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
