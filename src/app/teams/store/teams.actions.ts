import { Action } from '@ngrx/store';


const TEAMS_PREFIX = '[Teams]';
export const ActionTypes = {
    INIT_STATE: `${TEAMS_PREFIX}INIT_STATE`,
    FETCH_TEAMS: `${TEAMS_PREFIX}FETCH_TEAMS`
};

export class InitStateAction implements Action {
    type = ActionTypes.INIT_STATE;

    constructor(public payload?: any) {}
}

export class FetchTeamsAction implements Action {
    type = ActionTypes.FETCH_TEAMS;

    constructor(public payload?: any) {}
}

export type Actions = InitStateAction;
