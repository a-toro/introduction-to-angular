import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.results = this.locationList;
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter((location: HousingLocation) => {
      return location.city.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  @Input() locationList: HousingLocation[] = [];

  results: HousingLocation[] = this.locationList;

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
