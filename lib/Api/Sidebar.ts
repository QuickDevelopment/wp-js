import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Sidebar extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'sidebars';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}