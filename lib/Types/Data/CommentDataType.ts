/**
 * CommentDataType
 * @since 3.0.0
 */
export default interface CommentDataType {
    /**
     * The id.
     * @since 3.0.0
     */
    id: number,

    /**
     * The post.
     * @since 3.0.0
     */
    post: number,

    /**
     * The parent.
     * @since 3.0.0
     */
    parent: number,

    /**
     * The author.
     * @since 3.0.0
     */
    author: number,

    /**
     * The author name.
     * @since 3.0.0
     */
    author_name: string,

    /**
     * The author url.
     * @since 3.0.0
     */
    author_url: string,

    /**
     * The date.
     * @since 3.0.0
     */
    date: string,

    /**
     * The date gmt.
     * @since 3.0.0
     */
    date_gmt: string,

    /**
     * The content.
     * @since 3.0.0
     */
    content: {

        /**
         * The rendered.
         * @since 3.0.0
         */
        rendered: string
    },

    /**
     * The link.
     * @since 3.0.0
     */
    link: string,

    /**
     * The status.
     * @since 3.0.0
     */
    status: string,

    /**
     * The type.
     * @since 3.0.0
     */
    type: string,

    /**
     * The author avatar urls.
     * @since 3.0.0
     */
    author_avatar_urls: {
        /**
         * The 24.
         * @since 3.0.0
         */
        24: string,

        /**
         * The 48.
         * @since 3.0.0
         */
        48: string,

        /**
         * The 96.
         * @since 3.0.0
         */
        96: string
    },

    /**
     * The meta.
     * @since 3.0.0
     */
    meta: Array<object>,

    /**
     * The acf.
     * @since 3.0.0
     */
    acf: Array<object>,
}