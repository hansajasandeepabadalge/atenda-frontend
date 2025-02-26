import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from "./components/dashboard/sidebar/sidebar.component";
import { HeaderComponent } from "./components/dashboard/header/header.component";
import  { StatsCardComponent } from "./components/layout/stats-card/stats-card.component";
import { ActivityFeedComponent } from "./components/layout/activity-feed/activity-feed.component";
import { QuickActionsComponent } from "./components/layout/quick-actions/quick-actions.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    StatsCardComponent,
    ActivityFeedComponent,
    QuickActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
