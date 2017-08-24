export class Category {
    protected id: number;
    protected name: string;
    public parent_id: number;
    protected gender_id: number;
    protected type: number;
    protected order: number;

    constructor(category: any = {}) {
        this.id = category.id;
        this.name = category.name;
        this.parent_id = category.parent_id;
        this.gender_id = category.gender_id || '';
        this.type = category.type || '';
        this.order = category.order;
    }
}
