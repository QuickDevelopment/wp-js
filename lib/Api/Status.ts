import WPJSBase from "../Base/WPJSBase";
import StatusDataType from "../Types/Data/StatusDataType";

/**
 * The Status class.
 * @since 3.0.0
 */
export default class Status<T = StatusDataType[] | StatusDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'statuses';
    }

    /**
     * Fetch a single status.
     * @since 3.0.0
     * @example
     * import { Status } from '@quickdevelopment/wp-js';
     *
     * const status = new Status();
     *
     * status.fetch().then((data) => {
     *     console.log(data);
     * });
     */
    public async fetch(): Promise<T | T[]> {
        return this.get();
    }
}