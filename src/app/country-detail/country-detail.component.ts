import { Component, OnInit, Input } from '@angular/core';
import { G20Country } from '../G20Country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  @Input() g20Country: G20Country;
  constructor() { }

  ngOnInit() {
  }

}
