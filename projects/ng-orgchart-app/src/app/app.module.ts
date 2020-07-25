import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgchartModule } from '../../../ng-orgchart/src/lib/components/orgchart/orgchart.module';
import { DefaultChartComponent } from './default-chart/default-chart.component';
import { EditChartComponent } from './edit-chart/edit-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultChartComponent,
    EditChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OrgchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
