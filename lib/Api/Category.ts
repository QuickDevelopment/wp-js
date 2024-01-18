import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Category extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'categories';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}