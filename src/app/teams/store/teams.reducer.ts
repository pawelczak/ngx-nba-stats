import { TeamsState } from './teams.state';
import * as teams from './teams.actions';

const defaultState = new TeamsState();

export function teamsReducer(state: TeamsState = defaultState, action: teams.Actions): TeamsState {

    switch(action.type) {

        case teams.ActionTypes.INIT_STATE:
            return Object.assign({}, action.payload);

        case teams.ActionTypes.FETCH_TEAMS:
            return Object.assign({}, state, {fetching: true});

        default:
            return state;
    }

}
