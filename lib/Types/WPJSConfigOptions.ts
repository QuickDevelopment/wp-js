/**
 * The options for the WPJSConfig.
 *
 * @interface WPJSConfigOptions
 */
export default interface WPJSConfigOptions {
    /**
     * The URL of the WordPress API.
     *
     * @default 'https://api.wordpress.org'
     * @type {string}
     */
    apiUrl: string;

    /**
     * Whether to embed the data or not.
     *
     * @default true
     * @type {boolean}
     */
    embed: boolean
}