import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { HttpService } from '../../utils/http/http.service';

@Injectable()
export class TeamsService {

    private url = 'http://stats.nba.com/stats/leaguedashteamstats?Conference=&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Advanced&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2016-17&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=';

    private ghUrl: string = 'https://api.github.com/search/repositories?q=angular2&sort=stars&order=desc';

    constructor(private httpService: HttpService,
                private http: Http) {}

    getTeams() {

        request
            .get(this.url)
            .withCredentials('*')
            // .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
            // .set('X-API-Key', 'foobar')
            // .set('Accept', 'application/json')
            .end((err: any, res: any) => {
                console.log(res);
            });

        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({headers});
        //
        // return this.http
        //             .get(this.url)
        //             .map(result => result.json());





        // return this.httpService.get('http://stats.nba.com/stats/leaguedashteamstats?Conference=&DateFrom=&DateTo=&Division=&GameScope=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Advanced&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2016-17&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=')
        //             .map(result => result.json());
    }

}
;
