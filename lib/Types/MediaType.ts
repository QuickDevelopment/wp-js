/**
 * The WP Media fields.
 *
 * @interface MediaType
 */
export default interface MediaType {
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
        width: number,

        /**
         * The sizes.
         * @since 3.0.0
         */
        sizes: {
            /**
             * The thumbnailsize.
             * @since 3.0.0
             */
            [key: string]: {
                /**
                 * The file.
                 * @since 3.0.0
                 */
                file: string,

                /**
                 * The height.
                 * @since 3.0.0
                 */
                height: number,

                /**
                 * The mime type.
                 * @since 3.0.0
                 */
                mime_type: string,

                /**
                 * The source URL.
                 * @since 3.0.0
                 */
                source_url: string,

                /**
                 * The width.
                 * @since 3.0.0
                 */
                width: number
            }
        },

        /**
         * The image meta.
         * @since 3.0.0
         */
        image_meta: {
            /**
             * The aperture.
             * @since 3.0.0
             */
            aperture: string,

            /**
             * The credit.
             * @since 3.0.0
             */
            credit: string,

            /**
             * The camera.
             * @since 3.0.0
             */
            camera: string,

            /**
             * The caption.
             * @since 3.0.0
             */
            caption: string,

            /**
             * The created timestamp.
             * @since 3.0.0
             */
            created_timestamp: string,

            /**
             * The copyright.
             * @since 3.0.0
             */
            copyright: string,

            /**
             * The focal length.
             * @since 3.0.0
             */
            focal_length: string,

            /**
             * The iso.
             * @since 3.0.0
             */
            iso: string,

            /**
             * The shutter speed.
             * @since 3.0.0
             */
            shutter_speed: string,

            /**
             * The title.
             * @since 3.0.0
             */
            title: string,

            /**
             * The orientation.
             * @since 3.0.0
             */
            orientation: string,

            /**
             * The keywords.
             * @since 3.0.0
             */
            keywords: Array<string>
        }
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