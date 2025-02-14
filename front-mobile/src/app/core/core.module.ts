import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [HeaderComponent,SideNavComponent],
  imports: [
    CommonModule,ClarityModule,
  ],
  exports: [HeaderComponent,SideNavComponent],
})
export class CoreModule { }
