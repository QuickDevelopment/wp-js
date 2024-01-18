import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class BlockRenderer extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'block-renderer';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}