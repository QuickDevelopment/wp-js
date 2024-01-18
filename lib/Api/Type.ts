import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Type extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'types';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}