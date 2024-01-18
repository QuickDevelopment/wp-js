import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class MenuItem extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'menu-items';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}