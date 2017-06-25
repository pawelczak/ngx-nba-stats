import { RouterModule, Routes } from '@angular/router';

import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [

    {path: '', component: TeamsComponent},
    {path: 'teams', component: TeamsComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
