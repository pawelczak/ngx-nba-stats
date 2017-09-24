import { Component } from '@angular/core';

import { TeamsRepository } from './store/teams.repository';
import { TeamsState } from './store/teams.state';

@Component({
    selector: 'ns-teams',
    templateUrl: './teams.component.html'
})
export class TeamsComponent {

    fetching: boolean = false;

    teams: Array<string> = [];

    constructor(private teamsRepository: TeamsRepository) {
    }

    ngOnInit() {
        this.teamsRepository
            .getTeamsState()
            .subscribe((state: TeamsState) => {
                this.teams = state.teams
                this.fetching = state.fetching;
            })

        this.teamsRepository.fetchTeams()
    }

}
