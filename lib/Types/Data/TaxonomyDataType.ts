import TaxonomyFieldsType from "../Fields/TaxonomyFieldsType";

/**
 * TaxonomyDataType
 * @since 3.0.0
 */
export default interface TaxonomyDataType {
    /**
     * The category.
     * @since 3.0.0
     */
    category: TaxonomyFieldsType,

    /**
     * The post_tag.
     * @since 3.0.0
     */
    post_tag: TaxonomyFieldsType,

    /**
     * The organisations.
     * @since 3.0.0
     */
    organisations: TaxonomyFieldsType,
}