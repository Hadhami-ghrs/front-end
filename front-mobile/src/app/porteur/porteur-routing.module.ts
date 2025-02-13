import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorteurAddComponent } from './porteur-add/porteur-add.component';
import { PorteurDeleteComponent } from './porteur-delete/porteur-delete.component';
import { PorteurListComponent } from './porteur-list/porteur-list.component';
import { PorteurUpdateComponent } from './porteur-update/porteur-update.component';

const routes: Routes = [
  {path:"Add-porteur",component:PorteurAddComponent},
  {path:"Delete-porteur",component:PorteurDeleteComponent},
  {path:"List-porteur",component:PorteurListComponent},
  {path:"Update-porteur",component:PorteurUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorteurRoutingModule { }
