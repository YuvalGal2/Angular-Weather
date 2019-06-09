import { DataService } from './../../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Report } from './report.model';

@Component({
  selector: 'app-next-hours-report',
  templateUrl: './next-hours-report.component.html',
  styleUrls: ['./next-hours-report.component.css']
})
export class NextHoursReportComponent implements OnInit {
 
  private detailedReport : Report;
  private lastHoursReports:Report[] = [];
  constructor(private dataservice:DataService) {
    
   }

  ngOnInit() {
    this.dataservice.getNextHoursReport().subscribe((report:Report) => {
       this.detailedReport = report; 
       this.getLastRecords();
    })
  
  }
  getLastRecords(){
    if(this.detailedReport.list){
      const currentDayReport = this.detailedReport.list[0];
      const currentDay = currentDayReport.dt_txt.split(' ')[0];
      const lastThreeReports = this.detailedReport.list.slice(0,30);
      this.lastHoursReports = lastThreeReports.filter(report => report.dt_txt.split(' ')[0] == currentDay);  
    }
    
   
  }

}
