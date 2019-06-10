import { Report } from '../report.model';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() report:Report;
  private time:string;

  constructor() { }

  ngOnInit() {
    console.log(this.report);
    this.time = this.report.dt_txt.split(" ")[1];
  }

}
