import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { SearchTagging } from '../../classes/search-tagging';

@Injectable()
export class SearchTaggingService {
  private searchTaggings: any[] = [];
  private isFilter = false;
  private selectedIndex: number;

  searchTaggingsChange: Subject<any[]> = new Subject<any[]>();
  filterChange: Subject<boolean> = new Subject<boolean>();
  selectedIndexChange: Subject<number> = new Subject<number>();

  getSearchTaggings(): any[] {
    return this.searchTaggings;
  }

  setSearchTagging(searchTaggings: any[]) {
    this.searchTaggings = searchTaggings;
    this.searchTaggingsChange.next(searchTaggings);
  }

  addSearchTagging(searchTagging: any) {
    this.searchTaggings.push(searchTagging);
    this.searchTaggingsChange.next(this.searchTaggings);
  }

  deleteSearchTagging(index: number) {
    this.searchTaggings.splice(index, 1);
    this.searchTaggingsChange.next(this.searchTaggings);
  }

  getFilter(): boolean {
    return this.isFilter;
  }

  setFilter(value: boolean) {
    this.isFilter = value;
    this.filterChange.next(value);
  }

  getSelectedIndex(): number {
    return this.selectedIndex;
  }

  setSelectedIndex(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
    this.selectedIndexChange.next(selectedIndex);
  }

  constructor() { }
}
