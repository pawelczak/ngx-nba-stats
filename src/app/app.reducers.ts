import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { TeamsState } from './teams/store/teams.state';
import { teamsReducer }  from './teams/store/teams.reducer';

export interface AppState {
    teams: TeamsState
}

export const reducers = {
    teams: teamsReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
    if (process.env.ENV === 'production') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}
