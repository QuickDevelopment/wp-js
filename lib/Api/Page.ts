import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Page extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'pages';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}