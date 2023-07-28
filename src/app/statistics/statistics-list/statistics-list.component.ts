import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/statistics.service';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss'],
})
export class StatisticsListComponent implements OnInit, OnDestroy {
  battleData: Subject<string>;

  chartConfig = {
    xAxis: true,
    yAxis: true,
  };

  /*
  dataList = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ]; */

  dataList: any[] = [];

  constructor(private statisticsService: StatisticsService) {}

  //simpleSubject = new AsyncSubject<string>;

  ngOnInit(): void {
    this.statisticsService.connect();
    this.statisticsService.battleStatisticMessage$.subscribe((data) => {
      //console.log(data);
      let dataObj = JSON.parse(data);
      this.addOrUpdateData(dataObj.winner);
      this.dataList = [...this.dataList];
    });
    //this.battleData = this.statisticsService.battleStatisticMessage$;

    //SUBJECTS EJEMPLO
    /*
    this.simpleSubject.subscribe(value => {
      console.log('Subscriber 1: ', value);
    })

    
    this.simpleSubject.next('1');
    this.simpleSubject.next('2');

    this.simpleSubject.subscribe(value => {
      console.log('Subscriber 2: ', value);
    })

    this.simpleSubject.next('3');
    this.simpleSubject.next('4');
    this.simpleSubject.complete();
    */
  }

  addOrUpdateData(id: number): void {
    var index = this.dataList.findIndex((item) => {
      return item.name === id.toString();
    });

    if (index != -1) {
      //this.dataList[index].value = this.dataList[index].value + 1;
      this.dataList[index].value += 1;
    } else {
      this.dataList.push({
        name: id.toFixed(),
        value: 1
      });
    }
  }

  ngOnDestroy(): void {
    this.statisticsService.close();
  }
}
