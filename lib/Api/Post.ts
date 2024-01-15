import PostData from "../Types/PostData";
import createApi from "../Factory/CreateApi";

/**
 * Post class.
 *
 * @since 1.0.0
 * @example
 * import {Post} from "wp-js";
 *
 * // Endpoint is optional, if not provided it will use the posts endpoint.
 * const post = new Post('endpoint')
 * post.getPosts().then((posts) => {
 *     console.log(posts)
 * })
 */
const Post = createApi<PostData>({});

export default Post;