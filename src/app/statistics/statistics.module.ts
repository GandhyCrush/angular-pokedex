import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsListComponent } from './statistics-list/statistics-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StatisticsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'statistics-list', component: StatisticsListComponent }
    ])
  ]
})
export class StatisticsModule { }
