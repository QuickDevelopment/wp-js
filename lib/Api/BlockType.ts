import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class BlockType extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'block-types';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}