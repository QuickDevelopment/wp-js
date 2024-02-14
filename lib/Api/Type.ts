import WPJSBase from "../Base/WPJSBase";
import TypeDataType from "../Types/Data/TypeDataType";

/**
 * The Type class.
 * @since 3.0.0
 */
export default class Type<T = TypeDataType[] | TypeDataType> extends WPJSBase<T> {
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
    public async fetch(): Promise<T | T[]> {
        return this.get();
    }
}