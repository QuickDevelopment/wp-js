import WPJSBase from "../Base/WPJSBase";
import CommentDataType from "../Types/Data/CommentDataType";

/**
 * Comment class.
 * @since 3.0.0
 */
export default class Comment<T = CommentDataType[] | CommentDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'comments';
    }

    /**
     * Fetch a single comment.
     * @since 3.0.0
     * @example
     * import { Comment } from "@quickdevelopment/wp-js";
     *
     * const comment = new Comment('comments/1');
     *
     * comment.fetch().then((comment) => {
     *   console.log(comment);
     * })
     */
    public async fetch(): Promise<T> {
        return this.get();
    }

    /**
     * Fetch multiple comments.
     * @since 3.0.0
     * @example
     * import { Comment } from "@quickdevelopment/wp-js";
     *
     * const comments = new Comment();
     *
     * comments.fetchMany().then((comments) => {
     *   console.log(comments);
     * })
     */
    public async fetchMany(): Promise<T[]> {
        return this.get();
    }
}