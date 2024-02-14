import WPJSBase from "../Base/WPJSBase"
import PageDataType from "../Types/Data/PageDataType";

/**
 * The Page class.
 * @since 3.0.0
 */
export default class Page<T = PageDataType[] | PageDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'pages';
    }

    /**
     * Fetch a single page.
     * @since 3.0.0
     * @example
     * import {Page} from "@quickdevelopment/wp-js";
     *
     * const page = new Page('pages/1');
     *
     * page.fetch().then((page) => {
     *     console.log(page)
     * })
     */
    public async fetch(): Promise<T | T[]> {
        return this.get();
    }
}