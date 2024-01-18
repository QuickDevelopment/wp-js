import WPJSSingleton from "../Singleton/WPJSSingleton";
import ConfigManager from "../Manager/ConfigManager";

/**
 * Base class for all WPJS classes.
 *
 * @since 1.0.0
 * @abstract
 */
export default class WPJSBase<T> extends WPJSSingleton {
    protected endpoint: string = 'posts';
    private readonly _apiUrl: string = ConfigManager.getInstance().getConfig().apiUrl;
    private _searchParams: URLSearchParams = new URLSearchParams(ConfigManager.getInstance().getConfig().embed ? '_embed=true' : '');

    constructor() {
        super()
    }

    /**
     * Get the endpoint.
     * @private
     */
    private getEndpoint(): string {
        return this.endpoint;
    }

    /**
     * Get the API url.
     * @private
     */
    private getApiUrl(): string {
        return this._apiUrl;
    }

    /**
     * Get the search parameters.
     * @protected
     */
    protected getSearchParams(): URLSearchParams {
        return this._searchParams;
    }

    /**
     * Set search parameters for the request.
     * @param params Object containing search parameters.
     * @since 2.0.0
     */
    protected setSearchParams(params: Record<string, string | number>): this {
        for (const [key, value] of Object.entries(params)) {
            if (value != null) {
                this._searchParams.set(key, value.toString());
            }
        }

        return this;
    }

    /**
     * Get data about the current class.
     * @since 1.0.0
     * @protected
     */
    protected async get(): Promise<T[]> {
        console.log(this.constructUrl())
        const response: Response = await fetch(this.constructUrl())
        const data = await response.json();
        return data as T[];
    }

    /**
     * Fetch the data from the API.
     * @protected
     * @since 2.0.0
     */
    protected fetch(): Promise<T[]> {
        return Promise.reject(
            new Error('getPosts() must be implemented.')
        )
    }

    /**
     * Construct the url for the request.
     * @private
     * @since 1.0.0
     */
    private constructUrl(): string {
        const url: URL = new URL(`${this.getApiUrl()}/${this.getEndpoint()}`);
        url.search = this._searchParams.toString();
        return url.toString();
    }
}