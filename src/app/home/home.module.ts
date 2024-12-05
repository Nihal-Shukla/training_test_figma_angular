import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [HomeComponent,HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
