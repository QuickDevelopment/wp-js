import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class Template extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'templates';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}