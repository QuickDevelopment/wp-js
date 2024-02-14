import WPJSBase from "../Base/WPJSBase";
import CategoryDataType from "../Types/Data/CategoryDataType";

/**
 * Category class.
 * @since 3.0.0
 */
export default class Category<T = CategoryDataType[] | CategoryDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'categories';
    }

    /**
     * Fetch a single category.
     * @since 3.0.0
     * @example
     * import { Category } from "@quickdevelopment/wp-js";
     *
     * const category = new Category('categories/1');
     *
     * category.fetch().then((category) => {
     *   console.log(category);
     * })
     */
    public async fetch(): Promise<T | T[]> {
        return this.get();
    }
}