import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Widget extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'widgets';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}