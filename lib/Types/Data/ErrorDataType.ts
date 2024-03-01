/**
 * The WP Error fields.
 *
 * @interface ErrorDataType
 */
export default interface ErrorDataType {
    /**
     * The error code.
     */
    code: string,

    /**
     * The error message.
     */
    message: string
    data: {
        /**
         * The status code.
         */
        status: number,
    }
}