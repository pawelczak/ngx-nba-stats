import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdListModule, MdSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TeamsComponent } from './teams/teams.component';
import { TeamsService } from './teams/teams.service';
import { HttpService } from '../utils/http/http.service';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        routing,
        ReactiveFormsModule,
        BrowserAnimationsModule,

        MdListModule,
        MdButtonModule,
        MdSidenavModule
    ],
    declarations: [
        AppComponent,
        TeamsComponent
    ],
    providers: [
        HttpService,
        TeamsService
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
