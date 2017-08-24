import { Injectable } from '@angular/core';

import { Category } from 'app/shared/classes/category';

@Injectable()
export class CategoryService {
  categories: Category[] = [];

  constructor() { }

  getCategories() {
    return [
      new Category({id: 19, name: 'Ghi lê', parent_id: 2, gender_id: 1, type: 4, order: 4}),
      new Category({id: 18, name: 'Áo măng tô', parent_id: 2, gender_id: 1, type: 4, order: 4}),
      new Category({id: 1, name: 'Head', parent_id: 0, order: 1}),
      new Category({id: 2, name: 'Top', parent_id: 0, order: 2}),
      new Category({id: 3, name: 'Bot', parent_id: 0, order: 3}),
      new Category({id: 4, name: 'Foot', parent_id: 0, order: 4}),
      new Category({id: 5, name: 'Accessories', parent_id: 0, order: 5}),
      new Category({id: 6, name: 'Áo phông', parent_id: 2, gender_id: 1, type: 1, order: 1}),
      new Category({id: 7, name: 'Áo polo', parent_id: 2, gender_id: 1, type: 1, order: 1}),
      new Category({id: 8, name: 'Swearter', parent_id: 2, gender_id: 1, type: 1, order: 1}),
      new Category({id: 9, name: 'Áo sơ mi', parent_id: 2, gender_id: 1, type: 2, order: 2}),
      new Category({id: 10, name: 'Áo 3 lỗ', parent_id: 2, gender_id: 1, type: 2, order: 2}),
      new Category({id: 11, name: 'Áo len', parent_id: 2, gender_id: 1, type: 2, order: 2}),
      new Category({id: 12, name: 'Áo vest', parent_id: 2, gender_id: 1, type: 3, order: 3}),
      new Category({id: 13, name: 'Áo denim', parent_id: 2, gender_id: 1, type: 3, order: 3}),
      new Category({id: 14, name: 'Cardigan', parent_id: 2, gender_id: 1, type: 3, order: 3}),
      new Category({id: 15, name: 'Áo dạ', parent_id: 2, gender_id: 1, type: 3, order: 3}),
      new Category({id: 16, name: 'Áo hoodies', parent_id: 2, gender_id: 1, type: 4, order: 4}),
      new Category({id: 17, name: 'Áo da', parent_id: 2, gender_id: 1, type: 4, order: 4}),
    ];
  }

}
