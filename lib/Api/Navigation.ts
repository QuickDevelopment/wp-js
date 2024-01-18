import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Navigation extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'navigation';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}