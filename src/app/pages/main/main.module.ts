import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MainPageRoutingModule],
  declarations: [MainPage, NavbarComponent, HeaderComponent],
})
export class MainPageModule {}
