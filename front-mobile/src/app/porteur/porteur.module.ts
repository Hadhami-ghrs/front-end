import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorteurRoutingModule } from './porteur-routing.module';
import { PorteurDeleteComponent } from './porteur-delete/porteur-delete.component';
import { PorteurUpdateComponent } from './porteur-update/porteur-update.component';
import { PorteurAddComponent } from './porteur-add/porteur-add.component';
import { PorteurListComponent } from './porteur-list/porteur-list.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PorteurComponent } from './porteur.component';


@NgModule({
  declarations: [
    PorteurDeleteComponent,
    PorteurUpdateComponent,
    PorteurAddComponent,
    PorteurListComponent,
    PorteurComponent
   
  ],
  imports: [
    CommonModule,
    PorteurRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class PorteurModule { }
