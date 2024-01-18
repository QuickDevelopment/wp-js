import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class GlobalStyle extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'global-styles';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}