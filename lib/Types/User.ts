/**
 * The WP User fields.
 *
 * @interface User
 */
export default interface User {
    /**
     * The exposed ACF fields. Expose fields to use custom user information in your JS app.
     *
     * @type {Array<any>}
     * @see https://www.advancedcustomfields.com/resources/
     */
    acf: Array<any>,

    /**
     * The user ID.
     *
     * @type {number}
     */
    id: number,

    /**
     * The username.
     *
     * @type {string}
     */
    name: string,

    /**
     * The user URL.
     *
     * @type {string}
     */
    link: string,

    /**
     * The user slug.
     *
     * @type {string}
     */
    slug: string,

    /**
     * The user url.
     *
     * @type {string}
     */
    url: string,

    /**
     * The user description.
     *
     * @type {string}
     */
    description: string,

    /**
     * The user avatar URLs.
     *
     * @type {Object}
     */
    avatar_urls: {
        /**
         * The 24px avatar URL.
         *
         * @type {string}
         */
        24: string,

        /**
         * The 48px avatar URL.
         *
         * @type {string}
         */
        48: string,

        /**
         * The 96px avatar URL.
         *
         * @type {string}
         */
        96: string
    }
}