import PostData from "../Types/PostData";
import createApi from "../Factory/CreateApi";

/**
 * User class.
 *
 * @since 1.0.1
 * @example
 * import {User} from "wp-js";
 *
 * // Endpoint is optional, if not provided it will use the posts endpoint.
 * const user = userFactory(123, 'endpoint');
 * user.getPosts().then((posts) => {
 *     console.log(posts)
 * })
 */
const User = (author: number, endpoint?: string) => {
    return class extends createApi<PostData>({ endpoint, author }) {
        constructor() {
            super();
        }
    };
};

export default User;