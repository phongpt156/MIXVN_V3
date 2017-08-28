import { Injectable } from '@angular/core';

import { SearchTagging } from '../../classes/search-tagging';

@Injectable()
export class SearchTaggingService {
  private listSearchTagging: SearchTagging[] = [];

  constructor() { }
}
