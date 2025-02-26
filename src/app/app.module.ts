import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import  { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { SidebarComponent } from "./components/dashboard/sidebar/sidebar.component";
import { HeaderComponent } from "./components/dashboard/header/header.component";
import  { StatsCardComponent } from "./components/layout/stats-card/stats-card.component";
import { ActivityFeedComponent } from "./components/layout/activity-feed/activity-feed.component";
import { QuickActionsComponent } from "./components/layout/quick-actions/quick-actions.component";
import { LoginComponent } from "./components/auth/login/login.component";
import  { RegisterComponent } from "./components/auth/register/register.component";
import { AuthLayoutComponent } from "./components/auth/auth-layout/auth-layout.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    StatsCardComponent,
    ActivityFeedComponent,
    QuickActionsComponent,
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
