import MediaType from "./MediaType.ts";
import TermType from "./TermType.ts";
import UserDataType from "./UserDataType.ts";

/**
 * The page data type.
 * @since 3.0.0
 * @interface PageDataType
 */
export default interface PageDataType {
    /**
     * The ID.
     * @since 3.0.0
     */
    id: number,

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
     * The guid.
     * @since 3.0.0
     */
    guid: {
        /**
         * The rendered guid.
         * @since 3.0.0
         */
        rendered: string
    },

    /**
     * The modified.
     * @since 3.0.0
     */
    modified: string,

    /**
     * The modified gmt.
     * @since 3.0.0
     */
    modified_gmt: string,

    /**
     * The slug.
     * @since 3.0.0
     */
    slug: string,

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
     * The link.
     * @since 3.0.0
     */
    link: string,

    /**
     * The title.
     * @since 3.0.0
     */
    title: {
        /**
         * The rendered title.
         * @since 3.0.0
         */
        rendered: string
    },

    /**
     * The content.
     * @since 3.0.0
     */
    content: {
        /**
         * The rendered content.
         * @since 3.0.0
         */
        rendered: string,

        /**
         * The protected content.
         * @since 3.0.0
         */
        protected: boolean
    },

    /**
     * The excerpt.
     * @since 3.0.0
     */
    excerpt: {
        /**
         * The rendered excerpt.
         * @since 3.0.0
         */
        rendered: string,

        /**
         * The protected excerpt.
         * @since 3.0.0
         */
        protected: boolean
    },

    /**
     * The author.
     * @since 3.0.0
     */
    author: number,

    /**
     * The featured media.
     * @since 3.0.0
     */
    featured_media: number,

    /**
     * The parent.
     * @since 3.0.0
     */
    parent: number,

    /**
     * The menu order.
     * @since 3.0.0
     */
    menu_order: number,

    /**
     * The comment status.
     * @since 3.0.0
     */
    comment_status: string

    /**
     * The ping status.
     * @since 3.0.0
     */
    ping_status: string,

    /**
     * The template.
     * @since 3.0.0
     */
    template: string,

    /**
     * The meta.
     * @since 3.0.0
     */
    meta: Array<object>,

    /**
     * The tags.
     * @since 3.0.0
     */
    tags: Array<number>,

    /**
     * The acf.
     * @since 3.0.0
     */
    acf: Array<object>,

    /**
     * The _embedded.
     * @since 3.0.0
     */
    _embedded: {

        /**
         * The featured media.
         *
         * @type {Array<MediaType>}
         */
        "wp:featuredmedia": Array<MediaType>,

        /**
         * The terms.
         *
         * @type {Array<TermType>}
         */
        "wp:term": Array<TermType>,

        /**
         * The author.
         *
         * @type {Array<UserDataType>}
         */
        author: Array<UserDataType>
    }
}