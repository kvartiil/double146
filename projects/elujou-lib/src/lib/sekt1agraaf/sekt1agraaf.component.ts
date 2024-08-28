import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../xtee/xtee';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'sekt1agraaf',
  templateUrl: './sekt1agraaf.component.html',
  styleUrls: [ './sekt1agraaf.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [
    provideEcharts(),
  ]
})
export class Sekt1agraafComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {


}


}