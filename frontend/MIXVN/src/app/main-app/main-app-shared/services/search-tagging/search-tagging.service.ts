import { Injectable } from '@angular/core';

import { SearchTagging } from '../../classes/search-tagging';

@Injectable()
export class SearchTaggingService {
  public searchTaggings: any[] = [];
  public isFilter = false;
  public selectedIndex: number;

  constructor() { }
}
