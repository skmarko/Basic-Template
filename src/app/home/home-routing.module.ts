import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProfileComponent } from '../profile/profile.component';
import{HeaderComponent} from './header/header.component';
import{FooterComponent} from './footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPwdComponent } from '../forgot-pwd/forgot-pwd.component';
import { ChartComponent } from '../chart/chart.component';
import { TableComponent } from '../table/table.component';
import { from } from 'rxjs';
const routes: Routes = [
					    {path: 'home', component: HomeComponent, children: [
							 {path:'home',component:HomeComponent},
					    {path:'header', component:HeaderComponent},
						 {path:'footer' ,component:FooterComponent},
						 {path:'sidebar', component:SidebarComponent},
						 
						{path: 'register',component:RegisterComponent},
					   		{path:'manage-profile',component:ProfileComponent},
					   		{path:'detail-profile',component:ProfileComponent},
							  {path:'chart',component:ChartComponent},
							  {path:'table',component:TableComponent}
							]
						},
					
						{path:'forgot_pwd',component:ForgotPwdComponent}
					   ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
