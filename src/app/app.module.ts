import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarketComponent } from './market/market.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ItemPageComponent } from './item-page/item-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    NavbarComponent,
    ChannelFeedComponent,
    MainComponent,
    SearchPageComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    MarketComponent,
    ProfileComponent,
    LandingPageComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
