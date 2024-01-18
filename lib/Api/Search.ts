import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Search extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'search';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}