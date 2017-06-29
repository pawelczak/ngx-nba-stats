import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdListModule, MdProgressSpinnerModule, MdSpinner } from '@angular/material';

import { TeamsComponent } from './teams.component';
import { TeamsRepository } from './store/teams.repository';


@NgModule({
    imports: [
        BrowserModule,

        MdListModule,
        MdProgressSpinnerModule
    ],
    declarations: [
        TeamsComponent
    ],
    providers: [
        TeamsRepository
    ]
})
export class TeamsModule {}
