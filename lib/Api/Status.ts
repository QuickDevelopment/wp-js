import WPJSBase from "../Base/WPJSBase";
import StatusDataType from "../Types/Data/StatusDataType";

/**
 * The Status class.
 * @since 3.0.0
 */
export default class Status extends WPJSBase<StatusDataType[] | StatusDataType> {
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
    public async fetch(): Promise<StatusDataType> {
        return this.get();
    }

    /**
     * Fetch many statuses.
     *
     * @since 3.0.0
     * @example
     * import { Status } from '@quickdevelopment/wp-js';
     *
     * const status = new Status();
     *
     * status.fetchMany().then((data) => {
     *    console.log(data);
     * });
     */
    public async fetchMany(): Promise<StatusDataType[]> {
        return this.get();
    }
}