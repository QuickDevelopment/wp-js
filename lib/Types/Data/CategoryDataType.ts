import PostTagDataType from "./PostTagDataType";

/**
 * CategoryDataType
 * @since 3.0.0
 */
export default interface CategoryDataType extends PostTagDataType {
    /**
     * The parent.
     *
     * @type {number}
     * @since 3.0.0
     */
    parent: number,

    /**
     * The acf.
     * @since 3.0.0
     */
    acf: Array<object>,
}