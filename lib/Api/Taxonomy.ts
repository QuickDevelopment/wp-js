import WPJSBase from "../Base/WPJSBase";
import TaxonomyDataType from "../Types/Data/TaxonomyDataType";

/**
 * The Taxonomy class.
 * @since 3.0.0
 */
export default class Taxonomy<T = TaxonomyDataType[] | TaxonomyDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint :'taxonomies';
    }

    /**
     * Fetch a single taxonomy.
     * @since 3.0.0
     * @example
     * import { Taxonomy } from '@quickdevelopment/wp-js';
     *
     * const taxonomy = new Taxonomy();
     *
     * taxonomy.fetch().then((data) => {
     *     console.log(data);
     * });
     */
    public async fetch(): Promise<T | T[]> {
        return this.get();
    }
}