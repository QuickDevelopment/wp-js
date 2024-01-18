import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Taxonomy extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'taxonomies';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}