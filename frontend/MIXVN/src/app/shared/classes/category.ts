export class Category {
    id: number;
    name: string;
    parent_id: number;
    gender_id: number;
    type: number;
    order: number;

    constructor(category: any = {}) {
        this.id = category.id;
        this.name = category.name;
        this.parent_id = category.parent_id;
        this.gender_id = category.gender_id || '';
        this.type = category.type || '';
        this.order = category.order;
    }
}
