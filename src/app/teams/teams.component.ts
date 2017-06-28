import { Component } from '@angular/core';
import { TeamsService } from './teams.service';

@Component({
    selector: 'ns-teams',
    templateUrl: './teams.component.html'
})
export class TeamsComponent {

    teams: any = [];

    constructor(private teamsService: TeamsService) {
    }

    ngOnInit() {
        this.teamsService
            .getTeams()
            .then((teams: Array<string>) => {
                this.teams = teams;
            })
    }

}
