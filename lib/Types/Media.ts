/**
 * The WP Media fields.
 *
 * @interface Media
 */
export default interface Media {
    /**
     * The ACF fields. Expose fields to use custom media information in your JS app.
     *
     * @type {Array<object>}
     * @see https://www.advancedcustomfields.com/resources/adding-fields-media-attachments/
     */
    acf: Array<object>,

    /**
     * The alternative text.
     *
     * @type {string}
     */
    alt_text: string,

    /**
     * The author ID.
     *
     * @type {number}
     */
    author: number,

    /**
     * The caption.
     *
     * @type {{rendered: string}}
     */
    caption: {
        /**
         * The rendered caption.
         *
         * @type {string}
         */
        rendered: string
    },

    /**
     * The date.
     *
     * @type {string}
     */
    date: string,

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
     * The media details.
     *
     * @type {{file: string, height: number, filesize: number, width: number}}
     */
    media_details: {
        /**
         * The file.
         *
         * @type {string}
         */
        file: string,

        /**
         * The height.
         *
         * @type {number}
         */
        height: number,

        /**
         * The filesize.
         *
         * @type {number}
         */
        filesize: number,

        /**
         * The width.
         *
         * @type {number}
         */
        width: number
    },

    /**
     * The media type.
     *
     * @type {string}
     */
    media_type: string,

    /**
     * The mime type.
     *
     * @type {string}
     */
    mime_type: string,

    /**
     * The slug.
     *
     * @type {string}
     */
    slug: string,

    /**
     * The source URL.
     *
     * @type {string}
     */
    source_url: string,

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
    type: string
}