import { Component } from '@angular/core';
import { init, dispose, Chart } from 'klinecharts';
import { finalize } from 'rxjs';
import * as dayjs from 'dayjs'
import {ApiService} from "../_service/api.service";
import styleOptions from './config'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-k-line',
  templateUrl: './k-line.component.html',
  styleUrls: ['./k-line.component.scss']
})
export class KLineComponent {
  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          this.getDetail(params['code']);
        }
      )
  }

  getDetail(code: string) {
    this.api.getDetail({ code }).pipe(finalize(() => {
      console.log('complete');
    })).subscribe((res: any) => {
      const data = res.result.map((item: any) => ({
        // ...item,
        open: +item.open,
        close: +item.trade,
        high: +item.high,
        low: +item.low,
        volume: item.volume,
        turnover: item.amount,
        timestamp: dayjs(item.date).valueOf()
      }))
      // Init chart
      // @ts-ignore
      const chart: Chart = init('simple_chart', styleOptions);
      // Create main technical indicator MA
      // chart.createTechnicalIndicator('MA', false, {
      //   id: 'pane_1',
      // });
      // Create sub technical indicator VOL
      // chart.createTechnicalIndicator('VOL');
      // Fill data
      console.log(data)
      chart.applyNewData(data);
    });
  }

  ngOnDestroy(): void {
    dispose('simple_chart');
  }
}
