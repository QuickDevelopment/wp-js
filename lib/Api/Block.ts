import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Block extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'blocks';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}