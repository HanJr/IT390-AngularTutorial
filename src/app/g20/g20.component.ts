import { Component, OnInit } from '@angular/core';
import {G20Country} from '../G20Country';
import {COUNTRIES} from '../countries';

@Component({
  selector: 'app-g20',
  templateUrl: './g20.component.html',
  styleUrls: ['./g20.component.css']
})
export class G20Component implements OnInit {

  g20Countries = COUNTRIES;
  selectedCountry: G20Country;

  constructor() { }

  ngOnInit() {
  }
  onSelect(g20Country: G20Country): void {
    this.selectedCountry = g20Country;
  }
}
