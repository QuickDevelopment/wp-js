import PostData from "../Types/PostData";
import createApi from "../Factory/CreateApi";

/**
 * Search class.
 *
 * @since 1.0.1
 * @example
 * import {Search} from "wp-js";
 *
 * const searchTerm = getSearchTerm()
 *
 * // Endpoint is optional, if not provided it will use the posts endpoint.
 * const search = new Search(searchTerm, 'endpoint')
 * search.getPosts().then((posts) => {
 *     console.log(posts)
 * })
 */
const Search = createApi<PostData>({});

export default Search;