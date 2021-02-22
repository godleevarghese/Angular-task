import { Component, OnInit } from '@angular/core';
// import { table } from 'console';
import { from } from 'rxjs';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css'],
})
export class FormTableComponent implements OnInit {
  constructor(private formService: FormService) {}

  tableData: any = [];
  ngOnInit() {
    this.formService.dataAsObservable$.subscribe((message) => {
      this.tableData.push(message);
    });
  }
}
