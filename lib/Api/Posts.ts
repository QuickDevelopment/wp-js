import WPJSBase from "../Base/WPJSBase.ts";
import PostData from "../Types/PostData.ts";

/**
 * Posts class.
 *
 * @since 1.0.0
 */
export default class Posts extends WPJSBase<PostData>  {
    constructor(postUrl?: string) {
        super(postUrl);
    }

    /**
     * Get the posts.
     *
     * @since 1.0.0
     */
    public async getPosts(): Promise<PostData[]> {
        return this.get();
    }
}