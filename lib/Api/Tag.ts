import WPJSBase from "../Base/WPJSBase";
import PostTagDataType from "../Types/Data/PostTagDataType.ts";

/**
 * The Tag class.
 * @since 3.0.0
 */
export default class Tag extends WPJSBase<PostTagDataType[] | PostTagDataType> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'tags';
    }

    public async fetch(): Promise<PostTagDataType> {
        return this.get();
    }
}