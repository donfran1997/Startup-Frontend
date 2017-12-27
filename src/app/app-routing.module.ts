import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MarketComponent } from './market/market.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'w', component: HomeComponent },
  { path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: ChannelFeedComponent}
      { path: 'search', component: SearchPageComponent },
      { path: 'market', component: MarketComponent },
      { path: 'about', component: AboutUsComponent },
      { path: '**', component: PageNotFoundComponent }
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
