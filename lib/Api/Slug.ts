import PostData from "../Types/PostData";
import createApi from "../Factory/CreateApi";

/**
 * Slug class.
 *
 * @since 1.0.1
 * @example
 * import {Slug} from "wp-js";
 *
 * const slug = getSlugFromUrl()
 *
 * // Endpoint is optional, if not provided it will use the posts endpoint.
 * const slug = new Slug(slug, 'endpoint')
 * slug.getPosts().then((post) => {
 *     // This will return a single post.
 *     console.log(post)
 * })
 */
const Slug = createApi<PostData>({});

export default Slug;