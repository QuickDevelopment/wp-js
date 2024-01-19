import WPJSBase from "../Base/WPJSBase";
import CategoryDataType from "../Types/Data/CategoryDataType";

/**
 * Category class.
 * @since 3.0.0
 */
export default class Category extends WPJSBase<CategoryDataType[] | CategoryDataType> {
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
    public async fetch(): Promise<CategoryDataType> {
        return this.get();
    }

    /**
     * Fetch multiple categories.
     * @since 3.0.0
     * @example
     * import { Category } from "@quickdevelopment/wp-js";
     *
     * const categories = new Category();
     *
     * categories.fetchMany().then((categories) => {
     *   console.log(categories);
     * })
     */
    public async fetchMany(): Promise<CategoryDataType[]> {
        return this.get();
    }
}