import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MainComponent } from './main/main.component';
import { ChannelFeedComponent } from './channel-feed/channel-feed.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MarketComponent } from './market/market.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { BoysComponent } from './boys/boys.component';
import { WomenComponent } from './women/women.component';
import { GirlsComponent } from './girls/girls.component';
import { MenComponent } from './men/men.component';

const routes: Routes = [
  { path: 'welcome', component: LandingPageComponent },
  { path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: ChannelFeedComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'market', component: MarketComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'help', component: HelpComponent },
      { path: 'setting', component: SettingsComponent },
      { path: 'boys', component: BoysComponent },
      { path: 'girls', component: GirlsComponent },
      { path: 'men', component: MenComponent },
      { path: 'women', component: WomenComponent },
      { path: '**', component: PageNotFoundComponent },
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
