import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ClarityIcons, userIcon,boltIcon, cogIcon, homeIcon, certificateIcon } from '@cds/core/icon';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

ClarityIcons.addIcons(userIcon,boltIcon,cogIcon ,homeIcon,certificateIcon);

import { ClarityModule } from '@clr/angular';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,ClarityModule,CoreModule,
    AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
