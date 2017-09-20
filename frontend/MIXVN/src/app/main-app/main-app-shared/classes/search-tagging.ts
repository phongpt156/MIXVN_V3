export class SearchTagging {
    protected id;
    protected name;
    protected gender;
    protected parent_id;

    constructor(searchTagging: any = {}) {
        this.id = searchTagging.id;
        this.name = searchTagging.name;
        this.gender = searchTagging.gender;
        this.parent_id = searchTagging.parent_id;
    }
}
