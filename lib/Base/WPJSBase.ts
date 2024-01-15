import WPJSSingleton from "../Singleton/WPJSSingleton";
import ConfigManager from "../Manager/ConfigManager.ts";

/**
 * Base class for all WPJS classes.
 *
 * @since 1.0.0
 * @abstract
 */
export default class WPJSBase<T> extends WPJSSingleton {
    private readonly endpoint: string = 'posts';
    private readonly apiUrl: string = ConfigManager.getInstance().getConfig().apiUrl;
    private searchParams: URLSearchParams = new URLSearchParams(ConfigManager.getInstance().getConfig().embed ? '_embed=true' : '');

    constructor(endpoint?: string) {
        super()
        if (endpoint) {
            this.endpoint = endpoint;
        }
    }

    private getEndpoint(): string {
        return this.endpoint;
    }

    private getApiUrl(): string {
        return this.apiUrl;
    }

    protected getSearchParams(): URLSearchParams {
        return this.searchParams;
    }

    /**
     * Set search parameters for the request.
     * @param params Object containing search parameters.
     * @since 1.0.1
     */
    protected setSearchParams(params: Record<string, string | number>): this {
        for (const [key, value] of Object.entries(params)) {
            if (value != null) {
                this.searchParams.set(key, value.toString());
            }
        }

        return this;
    }

    /**
     * Get the posts.
     * @since 1.0.0
     * @protected
     * @example
     * import {Posts} from "wp-js";
     *
     * const posts = new Posts()
     *
     * posts.getPosts().then((posts) => {
     *     console.log(posts)
     * })
     * .catch((error) => {
     *     console.error(error)
     * })
     */
    protected async get(): Promise<T[]> {
        const response: Response = await fetch(this.constructUrl())
        const data = await response.json();
        return data as T[];
    }

    /**
     * Get the posts.
     *
     * @since 1.0.0
     * @example
     * import {Posts} from "wp-js";
     *
     * const posts = new Posts()
     *
     * posts.getPosts().then((posts) => {
     *     console.log(posts)
     * })
     * .catch((error) => {
     *     console.error(error)
     * })
     */
    public getPosts(): Promise<T[]> {
        return this.get();
    }

    private constructUrl(): string {
        const url: URL = new URL(`${this.getApiUrl()}/${this.getEndpoint()}`);
        url.search = this.searchParams.toString();
        return url.toString();
    }

    /**
     * Set the amount of posts to retrieve.
     * @param perPage
     * @param page
     * @since 1.0.0
     * @example
     * import {Posts} from "wp-js";
     *
     * const posts = new Posts()
     *
     * posts.take(10, 1).getPosts().then((posts) => {
     *     console.log(posts)
     * })
     * .catch((error) => {
     *     console.error(error)
     * })
     */
    public take(perPage: number, page: number): this {
        return this.setSearchParams({ per_page: perPage, page: page });
    }
}