import { Injectable } from '@angular/core';


@Injectable()
export class TeamsService {

    private url = `https://crossorigin.me/http://stats.nba.com/stats/leaguedashteamstats?Conference=&DateFrom=&DateTo=&
    Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Advanced&Month=0&OpponentTeamID=0&
    Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&
    Season=2016-17&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&
    VsDivision=`;

    constructor() {}

    getTeams(): Promise<Array<string>> {
        return request
                .get(this.url)
                .accept('application/json')
                .then((response: any) => response.body)
                .then(this.handleSuccess, this.handeError);
    }

    private handleSuccess(data: any) {
        return data.resultSets[0].rowSet.map((m: Array<any>) => m[1]);
    }

    private handeError(error: any) {
        return error;
    }

}
