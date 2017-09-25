import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdButtonModule, MdListModule, MdSidenavModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HttpService } from '../utils/http/http.service';
import { StandingsComponent } from './standings/standings.component';
import { PlayersIndexComponent } from './players/players-index/players-index.component';

import { TeamsModule } from './teams/teams.module';
import { reducer } from './app.reducers';
import { LeadersComponent } from './players/leaders/leaders.component';
import { DirectGraphComponent } from './players/direct-graph/direct-graph.component';
import { TimelineComponent } from './players/timeline/timeline.component';



@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        routing,
        ReactiveFormsModule,
        BrowserAnimationsModule,

        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 10
        }),

        MdListModule,
        MdButtonModule,
        MdSidenavModule,

        TeamsModule
    ],
    declarations: [
        AppComponent,
        StandingsComponent,
        PlayersIndexComponent,
        LeadersComponent,
        DirectGraphComponent,
        TimelineComponent
    ],
    providers: [
        HttpService
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
