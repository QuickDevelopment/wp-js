import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Comment extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'comments';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}