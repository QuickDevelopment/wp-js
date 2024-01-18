import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class TemplatePart extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'template-parts';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}