import WPJSBase from "../Base/WPJSBase";
import TypeDataType from "../Types/Data/TypeDataType";

/**
 * The Type class.
 * @since 3.0.0
 */
export default class Type extends WPJSBase<TypeDataType[] | TypeDataType> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'types';
    }

    /**
     * Fetch a single type.
     * @since 3.0.0
     * @example
     * import { Type } from "@quickdevelopment/wp-js";
     *
     * const type = new Type('types/post');
     *
     * type.fetch().then((type) => {
     *    console.log(type);
     * });
     */
    public async fetch(): Promise<TypeDataType> {
        return this.get();
    }

    /**
     * Fetch multiple types.
     * @since 3.0.0
     * @example
     * import { Type } from "@quickdevelopment/wp-js";
     *
     * const types = new Type();
     *
     * types.fetchMany().then((types) => {
     *   console.log(types);
     * })
     */
    public async fetchMany(): Promise<TypeDataType[]> {
        return this.get();
    }
}