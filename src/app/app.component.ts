import { Component, ViewEncapsulation } from '@angular/core';
import { TeamsRepository } from './teams/store/teams.repository';


@Component({
    selector: 'ns-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.ngx.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {


    constructor(TeamsRepository: TeamsRepository) {
        TeamsRepository.getTeams().subscribe((s) => {console.log(s)})

    }
}
