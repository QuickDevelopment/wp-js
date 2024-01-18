import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Menu extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'menus';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}