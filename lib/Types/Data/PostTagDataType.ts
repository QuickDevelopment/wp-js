/**
 * PostTagDataType
 * @interface PostTagDataType
 */
export default interface PostTagDataType{
    /**
     * The ID.
     * @since 3.0.0
     */
    id: number,

    /**
     * The count.
     * @since 3.0.0
     */
    count: number,

    /**
     * The description.
     * @since 3.0.0
     */
    description: string,

    /**
     * The link.
     * @since 3.0.0
     */
    link: string,

    /**
     * The name.
     * @since 3.0.0
     */
    name: string,

    /**
     * The slug.
     * @since 3.0.0
     */
    slug: string,

    /**
     * The taxonomy.
     * @since 3.0.0
     */
    taxonomy: string,

    /**
     * The meta.
     * @since 3.0.0
     */
    meta: Array<object>,
}