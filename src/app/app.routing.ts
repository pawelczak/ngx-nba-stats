import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { StandingsComponent } from './standings/standings.component';
import { PlayersIndexComponent } from './players/players-index/players-index.component';
import { LeadersComponent } from './players/leaders/leaders.component';
import { DirectGraphComponent } from './players/direct-graph/direct-graph.component';
import { TimelineComponent } from './players/timeline/timeline.component';


const routes: Routes = [

    {path: '', component: TeamsComponent},
    {path: 'teams', component: TeamsComponent},
    {path: 'standings', component: StandingsComponent},
    {path: 'players-index', component: PlayersIndexComponent},
    {path: 'leaders', component: LeadersComponent},
    {path: 'direct-graph', component: DirectGraphComponent},
    {path: 'timeline', component: TimelineComponent}

];

export const routing = RouterModule.forRoot(routes, { useHash: true });
