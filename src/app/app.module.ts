import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { ChannelComponent } from './channel/channel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';


@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    ChannelComponent,
    NavbarComponent,
    ChannelFeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
