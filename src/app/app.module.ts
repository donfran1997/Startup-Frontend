import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ChannelComponent } from './channel/channel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    ChannelComponent,
    NavbarComponent,
    ChannelFeedComponent,
    MainComponent,
    SearchPageComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
