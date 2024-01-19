import TypeFieldsType from "../Fields/TypeFieldsType";

/**
 * TypeDataType
 * @since 3.0.0
 */
export default interface TypeDataType {
    /**
     * The post.
     * @since 3.0.0
     */
    post: TypeFieldsType
    /**
     * The page.
     * @since 3.0.0
     */
    page: TypeFieldsType
    /**
     * The attachment.
     * @since 3.0.0
     */
    attachment: TypeFieldsType
    /**
     * The wp_block.
     * @since 3.0.0
     */
    wp_block: TypeFieldsType
}