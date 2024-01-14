/**
 * The WP Term fields
 *
 * @interface Term
 */
export default interface Term {
    /**
     * The acf fields. Expose fields to use custom term information in your JS app.
     *
     * @tip Expose Custom Taxonomy Types to use custom taxonomies in your JS app.
     * @type {Array<object>}
     * @see https://www.advancedcustomfields.com/resources/
     */
    acf: Array<object>,

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
     * The name.
     *
     * @type {string}
     */
    name: string,

    /**
     * The slug.
     *
     * @type {string}
     */
    slug: string,

    /**
     * The taxonomy.
     *
     * @type {string}
     */
    taxonomy: string
}