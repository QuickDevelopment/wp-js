import WPJSBase from "../Base/WPJSBase";
import PostDataType from "../Types/Data/PostDataType";

/**
 * Post class.
 *
 * @since 2.0.0
 */
export default class Post<T = PostDataType[] | PostDataType> extends WPJSBase<T>  {
    private _slug: string = '';
    private _searchTerm: string = '';

    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'posts';
    }

    /**
     * Set the slug.
     * @param slug
     * @since 2.0.0
     * @description
     * This will set the slug. This is useful if you want to get posts from different slugs while keeping the same Post instance.
     * @example
     * import {Post} from "@quickdevelopment/wp-js";
     *
     * const slugPost = new Post();
     *
     * slugPost.bySlug('hello-world').get().then((post) => {
     *     // This will return the post from slug 'hello-world'.
     *     console.log(post)
     * })
     */
    public bySlug(slug: string): this {
        this._slug = slug;
        this.setSearchParams({slug: slug})
        return this;
    }

    /**
     * Get the slug.
     * @since 2.0.0
     */
    public getSlug(): string {
        return this._slug;
    }

    /**
     * Set the searchTerm.
     * @param searchTerm
     * @since 2.0.0
     * @description
     * This will set the searchTerm. This is useful if you want to get posts from different searchTerms while keeping the same Post instance.
     * @example
     * import {Post} from "@quickdevelopment/wp-js";
     *
     * const searchTermPosts = new Post();
     *
     * searchTermPosts.bySearchTerm('hello-world').get().then((posts) => {
     *     // This will return the post from slug 'hello-world'.
     *     console.log(posts)
     * })
     */
    public bySearchTerm(searchTerm: string): this {
        this._searchTerm = searchTerm;
        this.setSearchParams({search: searchTerm})
        return this;
    }

    /**
     * Get the searchTerm.
     * @since 2.0.0
     */
    public getSearchTerm(): string {
        return this._searchTerm;
    }

    /**
     * Set the author.
     * @param userId
     * @since 2.0.0
     * @description
     * This will set the author. This is useful if you want to get posts from different authors while keeping the same Post instance.
     * @example
     * import {Post} from "@quickdevelopment/wp-js";
     *
     * const authorPosts = new Post();
     *
     * authorPosts.byAuthor(1).get().then((posts) => {
     *     // This will return the posts from author with id 1.
     *     console.log(posts)
     * })
     */
    public byAuthor(userId: number): this {
        this.setSearchParams({author: userId})
        return this;
    }

    /**
     * Set the amount of posts to take.
     * @param perPage
     * @param page
     * @since 2.0.0
     * @description
     * This will paginate the posts using per_page and the page query parameters.
     */
    public paginate(perPage: number, page: number): this {
        this.setSearchParams({per_page: perPage, page: page})
        return this;
    }

    /**
     * Get a single post.
     * @since 2.0.0
     * @example
     * import {Post} from "@quickdevelopment/wp-js";
     *
     * const post = new Post('posts/1');
     *
     * post.fetch().then((post) => {
     *     console.log(post)
     * })
     */
    public async fetch(): Promise<T> {
        return this.get();
    }

    /**
     * Get multiple posts.
     * @since 3.0.0
     * @example
     * import {Post} from "@quickdevelopment/wp-js";
     *
     * const posts = new Post();
     *
     * posts.fetchMany().then((posts) => {
     *     console.log(posts)
     * })
     */
    public async fetchMany(): Promise<T[]> {
        return this.get();
    }
}