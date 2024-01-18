import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Setting extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'settings';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}