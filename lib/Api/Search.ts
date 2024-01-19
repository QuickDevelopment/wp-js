import WPJSBase from "../Base/WPJSBase";
import SearchDataType from "../Types/Data/SearchDataType";

/**
 * The Search class.
 * @since 3.0.0
 */
export default class Search extends WPJSBase<SearchDataType[]> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'search';
    }

    /**
     * Set the search subtype.
     * @param subtype
     * @since 3.0.0
     * @example
     * import { Search } from "@quickdevelopment/wp-js";
     *
     * const search = new Search();
     * search.setSubtype('post');
     */
    public setSubtype(subtype: string): this {
        this.setSearchParams({ subtype: subtype });
        return this;
    }

    /**
     * Fetch multiple search results.
     * @since 3.0.0
     * @example
     * import { Search } from "@quickdevelopment/wp-js";
     *
     * const search = new Search();
     * search.setSubtype('post').fetch().then((search) => {
     *    console.log(search);
     * })
     */
    public async fetch(): Promise<SearchDataType[]> {
        return this.get();
    }
}