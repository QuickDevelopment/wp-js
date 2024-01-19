import TypeTaxonomyFieldsInterface from "./TypeTaxonomyFieldsInterface.ts";

/**
 * TaxonomyFieldsType interface.
 * @since 3.0.0
 */
export default interface TaxonomyFieldsType extends TypeTaxonomyFieldsInterface {
    /**
     * The types.
     * @since 3.0.0
     */
    types: Array<string>,
}