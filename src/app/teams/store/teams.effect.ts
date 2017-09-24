import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ActionTypes } from './teams.actions';
import { TeamsService } from '../teams.service';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
                private teamsService: TeamsService) {
    }

    @Effect()
    fetchData$ = this.actions$
        .ofType(ActionTypes.FETCH_TEAMS)
        .switchMap(() => {

            return this.teamsService
                        .getTeams()
                        .then((data: any) => {

                        }, (err: any) => {

                        });
        })

}
