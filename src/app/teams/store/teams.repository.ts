import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TeamsState } from './teams.state';
import * as TeamsActions from './teams.actions';

@Injectable()
export class TeamsRepository {

    constructor(private store: Store<any>) {}

    getTeamsState(): Observable<TeamsState> {
        return this.store.select('teams');
    }

    getTeams(): Observable<Array<string>> {
        return this.store.select('teams')
                            .map((state: TeamsState) => state.teams);
    }

    fetchTeams(): void {
        this.store.dispatch(new TeamsActions.FetchTeamsAction());
    }

}
