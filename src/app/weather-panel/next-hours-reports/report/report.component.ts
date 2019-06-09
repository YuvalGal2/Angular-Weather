import { Report } from '../report.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() report:Report;
  constructor() { }

  ngOnInit() {
    console.log(this.report);
  }

}
