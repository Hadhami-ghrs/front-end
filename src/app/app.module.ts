import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityIcons, userIcon,boltIcon, cogIcon, homeIcon, certificateIcon } from '@cds/core/icon';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

ClarityIcons.addIcons(userIcon,boltIcon,cogIcon ,homeIcon,certificateIcon);

import { ClarityModule } from '@clr/angular';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,ClarityModule,CoreModule,HttpClientModule,
    AppRoutingModule,BrowserAnimationsModule,FormsModule,AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
