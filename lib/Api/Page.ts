import WPJSBase from "../Base/WPJSBase"
import PageDataType from "../Types/Data/PageDataType";

/**
 * The Page class.
 * @since 3.0.0
 */
export default class Page extends WPJSBase<PageDataType[] | PageDataType> {
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
    public async fetch(): Promise<PageDataType> {
        return this.get();
    }

    /**
     * Fetch multiple pages.
     * @since 3.0.0
     * @example
     * import {Page} from "@quickdevelopment/wp-js";
     *
     * const pages = new Page();
     *
     * pages.fetchMany().then((pages) => {
     *     console.log(pages)
     * })
     */
    public async fetchMany(): Promise<PageDataType[]> {
        return this.get();
    }
}