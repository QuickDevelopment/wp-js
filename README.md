<div align="center">
<h2>@quickdevelopment/wp-js &middot; <a href="https://badge.fury.io/js/@quickdevelopment%2Fwp-js"><img src="https://badge.fury.io/js/@quickdevelopment%2Fwp-js.svg" alt="npm version" height="18"></a></h2>
  <p align="center">
    Get all your public WordPress data through the WP API using a tree-shakable TypeScript library.
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#coming-up">Coming up</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Installation
```
npm install @quickdevelopment/wp-js
```

## Usage

### Setting the Config
```
// src/main.ts
import { ConfigManager } from "@quickdevelopment/wp-js";

ConfigManager.getInstance({
    // Replace with your WordPress API URL
    apiUrl: 'https://developer.wordpress.org/wp-json/wp/v2',
    embed: true
});
```

### Retrieve Posts
This is an example of how to retrieve posts from your WordPress site using the `Post` class.
```
import {Post, PostDataType} from "@quickdevelopment/wp-js";

const posts = new Post()

posts.fetchMany().then((posts: PostDataType[]) => {
  console.log(posts);
})
.catch((err) => {
  console.log(err);
});
```

## Documentation
For more information about the library, see the [documentation](https://quickdevelopment.github.io/wp-js/).

## Coming up
- [x] Add more API classes to retrieve data from the WP API
- [ ] Examples of how to use the library in multiple contexts
- [ ] Add a documentation site

## Contributing
If you want to contribute to this project, see [CONTRIBUTING](CONTRIBUTING) for details.

## License
MIT © Quickdevelopment. See [LICENSE](LICENSE) for details.


[coveralls-image]:https://coveralls.io/repos/github/quickdevelopment/wp-js/badge.svg?branch=main
[coveralls-url]:https://coveralls.io/github/quickdevelopment/wp-js?branch=main