import MediaType from "../MediaType";
import UserDataType from "./UserDataType";

export default interface MediaDataType extends MediaType {
    /**
     * The post.
     *
     * @type {number}
     */
    post: number,

    /**
     * The embedded.
     *
     * @type {object}
     */
    _embedded: {
        /**
         * The author.
         *
         * @type {Array<object>}
         */
        author: UserDataType[]
    }
}