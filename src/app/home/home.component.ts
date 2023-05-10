import { Component } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { finalize } from 'rxjs'
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  x = 'xxxx'
  value = '';
  type = 'desc';
  types = [{ value: 'desc', label: '连涨' }, { value: 'asc', label: '连跌' }];
  tableData: ApiResponse.SortResult = []
  displayedColumns: string[] = ['_id', 'name', 'price'];

  constructor(private api: ApiService, private router: Router) {
  }

  onX() {
    setTimeout(() => {
      this.x = 'yyyy'
    }, 1000)
  }

  ngOnInit(): void {
    console.log(this.type)
  }

  toDetail(id: string) {
    this.router.navigate(['/kLine'], { queryParams: { code: id } })
  }

  search() {
    if (!this.value) {
      alert('请输入天数')
    }

    const days = parseInt(this.value)
    this.api.getStock({
      num: days < 2 ? 2 : days > 10 ? 10 : days,
      type: this.type
    }).pipe(finalize(() => {
      console.log('complete');
    })).subscribe(res => {
      this.tableData = res.result.map((item: any) => ({
        ...item,
        price: item.trades.pop()
      }));
    });
  }

  typeChange() {
    this.tableData = []
  }

  clear() {
    this.value = ''
  }
}
