import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DirectivesModule } from '../components/directives.module';

import constants from './app.constants';
import { WebsiteModule } from './web-site/web-site.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        DirectivesModule,
        WebsiteModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
