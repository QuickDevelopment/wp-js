import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Theme extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'themes';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}