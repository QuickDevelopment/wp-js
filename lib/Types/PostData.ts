import UserDataType from "./UserDataType.ts";
import Media from "./Media.ts";
import Term from "./Term";

/**
 * The WP Post fields.
 *
 * @interface PostData
 */
export default interface PostData {
    /**
     * The acf fields. Expose fields to use custom post information in your JS app.
     *
     * @tip Expose Custom Post Types to use custom post types in your JS app.
     * @type {Array<object>}
     * @see https://www.advancedcustomfields.com/resources/adding-fields-posts/
     */
    acf: Array<object>,

    /**
     * The article type.
     *
     * @type {Array<number>}
     */
    article_type: Array<number>,

    /**
     * The author id.
     *
     * @type {number}
     */
    author: number,

    /**
     * The categories.
     *
     * @type {Array<number>}
     */
    categories: Array<number>,

    /**
     * The comment status.
     *
     * @type {string}
     */
    comment_status: string,

    /**
     * The content.
     *
     * @type {{rendered: string, protected: boolean}}
     */
    content: {
        /**
         * The rendered content.
         *
         * @type {string}
         */
        rendered: string,

        /**
         * The protected content.
         *
         * @type {boolean}
         */
        protected: boolean
    },

    /**
     * The date.
     *
     * @type {string}
     */
    date: string,

    /**
     * The date gmt.
     *
     * @type {string}
     */
    date_gmt: string,

    /**
     * The excerpt.
     *
     * @type {{rendered: string, protected: boolean}}
     */
    excerpt: {
        /**
         * The rendered excerpt.
         *
         * @type {string}
         */
        rendered: string,

        /**
         * The protected excerpt.
         *
         * @type {boolean}
         */
        protected: boolean
    },

    /**
     * The featured media id.
     *
     * @type {number}
     */
    featured_media: number,

    /**
     * The format.
     *
     * @type {string}
     */
    format: string,

    /**
     * The guid.
     *
     * @type {{rendered: string}}
     */
    guid: {
        /**
         * The rendered guid.
         *
         * @type {string}
         */
        rendered: string
    },

    /**
     * The id.
     *
     * @type {number}
     */
    id: number,

    /**
     * The link.
     *
     * @type {string}
     */
    link: string,

    /**
     * The meta.
     *
     * @type {Array<object>}
     */
    meta: Array<object>,

    /**
     * The modified.
     *
     * @type {string}
     */
    modified: string,

    /**
     * The modified gmt.
     *
     * @type {string}
     */
    modified_gmt: string,

    /**
     * The ping status.
     *
     * @type {string}
     */
    ping_status: string,

    /**
     * The slug.
     *
     * @type {string}
     */
    slug: string,

    /**
     * The status.
     *
     * @type {string}
     */
    status: string,

    /**
     * The sticky.
     *
     * @type {boolean}
     */
    sticky: boolean,

    /**
     * The tags.
     *
     * @type {Array<number>}
     */
    tags: Array<number>,

    /**
     * The template.
     *
     * @type {string}
     */
    template: string,

    /**
     * The title.
     *
     * @type {{rendered: string}}
     */
    title: {
        /**
         * The rendered title.
         *
         * @type {string}
         */
        rendered: string
    },

    /**
     * The type.
     *
     * @type {string}
     */
    type: string,

    /**
     * The _embedded.
     *
     * @type {{"wp:featuredmedia": Array<Media>, "wp:term": Array<Term>, author: Array<UserDataType>}}
     */
    _embedded: {

        /**
         * The featured media.
         *
         * @type {Array<Media>}
         */
        "wp:featuredmedia": Array<Media>,

        /**
         * The terms.
         *
         * @type {Array<Term>}
         */
        "wp:term": Array<Term>,

        /**
         * The author.
         *
         * @type {Array<UserDataType>}
         */
        author: Array<UserDataType>
    }
}