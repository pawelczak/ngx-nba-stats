import { Component } from "@angular/core";
import { TeamsService } from './teams.service';

@Component({
    selector: 'ns-teams',
    templateUrl: './teams.component.html'
})
export class TeamsComponent {

    teams: any = [];

    constructor(private teamsService: TeamsService) {}

    ngOnInit() {
        this.teamsService
            .getTeams()
            .map(m => m.resource.resultSets[0].rowSet)
            .subscribe((result) => {
                this.teams = result;
            })
    }

}
