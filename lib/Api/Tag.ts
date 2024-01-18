import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Tag extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'tags';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}