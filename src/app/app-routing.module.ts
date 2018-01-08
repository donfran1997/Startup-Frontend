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
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SettingsComponent } from './settings/settings.component';

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
      { path: 'signup', component: SignUpFormComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'setting', component: SettingsComponent },
      { path: '**', component: PageNotFoundComponent },      
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
