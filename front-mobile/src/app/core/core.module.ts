import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [HeaderComponent,SideNavComponent,FooterComponent],
  imports: [
    CommonModule,ClarityModule,
  ],
  exports: [HeaderComponent,SideNavComponent,FooterComponent],
})
export class CoreModule { }
