import WPJSBase from "../Base/WPJSBase";
import MediaDataType from "../Types/Data/MediaDataType";

/**
 * The Media class.
 * @since 3.0.0
 */
export default class Media<T = MediaDataType[] | MediaDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'media';
    }

    /**
     * Fetch a single media.
     * @since 3.0.0
     * @example
     * import {Media} from "@quickdevelopment/wp-js";
     *
     * const media = new Media('media/1');
     *
     * media.fetch().then((media) => {
     *     console.log(media)
     * })
     */
    public async fetch(): Promise<T> {
        return this.get();
    }

    /**
     * Fetch multiple media.
     * @since 3.0.0
     * @example
     * import {Media} from "@quickdevelopment/wp-js";
     *
     * const media = new Media();
     *
     * media.fetchMany().then((media) => {
     *    console.log(media)
     * })
     */
    public async fetchMany(): Promise<T[]> {
        return this.get();
    }
}