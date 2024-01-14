import WPJSSingleton from "../Singleton/WPJSSingleton";
import PostData from "../Types/PostData.ts";
import ConfigManager from "../Manager/ConfigManager.ts";

/**
 * Base class for all WPJS classes.
 *
 * @since 1.0.0
 * @abstract
 */
export default class WPJSBase<T> extends WPJSSingleton {
    private readonly postUrl: string = 'posts';
    private readonly apiUrl: string = ConfigManager.getInstance().getConfig().apiUrl;
    private searchParams: string = '?';
    private embed: boolean = ConfigManager.getInstance().getConfig().embed;

    constructor(postUrl?: string) {
        super()
        if (postUrl) {
            this.postUrl = postUrl;
        }
    }

    private getPostUrl(): string {
        return this.postUrl;
    }

    private getApiUrl(): string {
        return this.apiUrl;
    }

    private getSearchParams(): string {
        return this.searchParams;
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
        console.log(this.constructUrl())
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
    protected getPosts(): Promise<PostData[]> {
        return Promise.reject(
            new Error('getPosts() must be implemented.')
        )
    }

    /**
     * Set the embed for the request.
     * @param embed
     * @since 1.0.0
     * @example
     * import {Posts} from "wp-js";
     *
     * const posts = new Posts()
     *
     * posts.setEmbedForRequest(false).getPosts().then((posts) => {
     *     console.log(posts)
     * })
     * .catch((error) => {
     *     console.error(error)
     * })
     */
    public setEmbedForRequest(embed: boolean): this {
        this.embed = embed;
        return this;
    }

    private constructUrl(): string
    {
        const baseUrl: string = `${this.getApiUrl()}/${this.getPostUrl()}${this.getSearchParams()}`;
        const embedParam: string = `_embed=${this.embed}`;

        if (baseUrl.includes('_embed=')) {
            return baseUrl.replace(/_embed=[^&]+/, embedParam);
        } else if (this.getSearchParams() === '?') {
            return `${baseUrl}${embedParam}`;
        } else {
            return `${baseUrl}&${embedParam}`;
        }
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
        const url: URL = new URL(this.constructUrl());
        const perPageParam: string | null = url.searchParams.get("per_page");

        if (perPageParam) {
            url.searchParams.set("per_page", String(perPage));
            url.searchParams.set("page", String(page));
        } else {
            url.searchParams.append("per_page", String(perPage));
            url.searchParams.append("page", String(page));
        }
        this.searchParams = url.search;
        return this;
    }
}