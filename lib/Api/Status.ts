import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Status extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'statuses';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}