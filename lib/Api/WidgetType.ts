import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType.ts";

export default class WidgetType extends WPJSBase<UserDataType> {
    constructor() {
        super();
        this.endpoint = 'widget-types';
    }

    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}