import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CategoryService } from 'app/main-app/main-app-shared/services/category/category.service';

import { SearchTagging } from '../../classes/search-tagging';

@Injectable()
export class SearchTaggingService {
  public searchTaggings: SearchTagging[] = [];
  public itemName: string;
  public isReload = true;
  public hash: string;
  private selectedIndex: number;

  searchTaggingsChange: Subject<any[]> = new Subject<any[]>();
  selectedIndexChange: Subject<number> = new Subject<number>();
  itemNameChange: Subject<string> = new Subject<string>();

  constructor(
    private categoryService: CategoryService
  ) { }

  getSearchTaggings(): any[] {
    return this.searchTaggings;
  }

  setSearchTagging(searchTaggings: any[]) {
    this.searchTaggings = searchTaggings;
    this.searchTaggingsChange.next(searchTaggings);
  }

  setItemName(name: string) {
    this.itemName = name;
    this.itemNameChange.next(name);
  }

  addSearchTagging(searchTagging: any) {
    this.searchTaggings.push(searchTagging);
    this.searchTaggingsChange.next(this.searchTaggings);
  }

  deleteSearchTagging(index: number) {
    this.searchTaggings.splice(index, 1);
    this.searchTaggingsChange.next(this.searchTaggings);
  }

  getSelectedIndex(): number {
    return this.selectedIndex;
  }

  setSelectedIndex(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
    this.selectedIndexChange.next(selectedIndex);
  }

  parseTagToHash(): string {
    let hash = '';

    this.searchTaggings.forEach((searchTagging: SearchTagging) => {
      if (hash) {
        hash += '&';
      }

      Object.keys(searchTagging).forEach(key => {
        if (searchTagging[key] !== undefined) {
          if (hash && hash[hash.length - 1] !== '&') {
            hash += '+' + key + '=';
          } else {
            hash += key + '=';
          }
          hash += searchTagging[key];
        }
      });
    });

    return hash;
  }

  async parseHashToTag(itemName?: string, filter?: string) {
    if (itemName) {
      this.setItemName(itemName);
    }

    if (filter) {
      const items: any[] = filter.split('&');
      let searchTagging: any;
      let categories;

      categories = await this.getChildCategories();

      items.forEach(item => {
        searchTagging = {};

        item.split('+').forEach(tag => {
          tag = tag.split('=');
          searchTagging[tag[0]] = tag[1];
        });
        this.searchTaggings.push(searchTagging);
      });
    }
    console.log(this.searchTaggings);
  }

  getChildCategories() {
    return new Promise(resolve => {
      this.categoryService.getChildCategories()
      .subscribe(res => {
        resolve(res.data);
      });
    });
  }
}
