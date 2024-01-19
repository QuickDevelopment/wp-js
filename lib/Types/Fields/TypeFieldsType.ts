import TypeTaxonomyFieldsInterface from "./TypeTaxonomyFieldsInterface.ts";

/**
 * TypeFieldsType interface
 * @since 3.0.0
 */
export default interface TypeFieldsType extends TypeTaxonomyFieldsInterface {
    /**
     * The taxonomies.
     * @since 3.0.0
     */
    taxonomies: Array<string>,
}