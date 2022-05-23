import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { AdvertisementTableComponentComponent } from './advertisement-table-component/advertisement-table-component.component';

const routes: Routes = [
{path:'AdvertisementFormComponentComponent' ,component:AdvertisementFormComponentComponent},
{path:'AdvertisementTableComponentComponent',component:AdvertisementTableComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AdvertisementFormComponentComponent,AdvertisementTableComponentComponent]
