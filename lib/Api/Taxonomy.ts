import WPJSBase from "../Base/WPJSBase";
import TaxonomyDataType from "../Types/Data/TaxonomyDataType";

/**
 * The Taxonomy class.
 * @since 3.0.0
 */
export default class Taxonomy extends WPJSBase<TaxonomyDataType[] | TaxonomyDataType> {
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
    public async fetch(): Promise<TaxonomyDataType> {
        return this.get();
    }

    /**
     * Fetch many taxonomies.
     *
     * @since 3.0.0
     * @example
     * import { Taxonomy } from '@quickdevelopment/wp-js';
     *
     * const taxonomy = new Taxonomy();
     *
     * taxonomy.fetchMany().then((data) => {
     *    console.log(data);
     * });
     */
    public async fetchMany(): Promise<TaxonomyDataType[]> {
        return this.get();
    }
}