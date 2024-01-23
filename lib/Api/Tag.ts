import WPJSBase from "../Base/WPJSBase";
import PostTagDataType from "../Types/Data/PostTagDataType.ts";

/**
 * The Tag class.
 * @since 3.0.0
 */
export default class Tag<T = PostTagDataType[] | PostTagDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'tags';
    }

    /**
     * Fetch a single tag.
     * @since 3.0.0
     * @example
     * import { Tag } from '@quickdevelopment/wp-js';
     *
     * const tag = new Tag();
     *
     * tag.fetch().then((data) => {
     *    console.log(data);
     * })
     */
    public async fetch(): Promise<T> {
        return this.get();
    }

    /**
     * Fetch many tags.
     * @since 3.0.0
     * @example
     * import { Tag } from '@quickdevelopment/wp-js';
     *
     * const tag = new Tag();
     *
     * tag.fetchMany().then((data) => {
     *   console.log(data);
     * })
     */
    public async fetchMany(): Promise<T[]> {
        return this.get();
    }
}