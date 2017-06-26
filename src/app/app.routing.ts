import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { StandingsComponent } from './standings/standings.component';
import { PlayersIndexComponent } from './players/players-index/players-index.component';


const routes: Routes = [

    {path: '', component: TeamsComponent},
    {path: 'teams', component: TeamsComponent},
    {path: 'standings', component: StandingsComponent},
    {path: 'players-index', component: PlayersIndexComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
