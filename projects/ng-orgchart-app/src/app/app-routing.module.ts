import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultChartComponent } from './default-chart/default-chart.component'
import { EditChartComponent } from './edit-chart/edit-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DefaultChartComponent },
  { path: 'edit-chart', component: EditChartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
