import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Plugin extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'plugins';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}