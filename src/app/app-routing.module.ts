import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MarketComponent } from './market/market.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'market', component: MarketComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
