import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import {HttpClientModule} from '@angular/common/http'
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { FormsModule } from '@angular/forms';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,

    GithubProfileDataComponent,
    GithubReposComponent,
    GithubProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
