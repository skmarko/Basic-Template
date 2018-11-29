import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from '../profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPwdComponent } from '../forgot-pwd/forgot-pwd.component';
import { ChartComponent } from '../chart/chart.component';
import { TableComponent } from '../table/table.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
@NgModule({
  declarations: [HomeComponent,
    ProfileComponent,
     HeaderComponent,
     SidebarComponent, 
     FooterComponent,
     RegisterComponent,
     ForgotPwdComponent,
     ChartComponent,
     TableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class HomeModule { }
