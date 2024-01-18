# WP-JS

Get all your public WordPress data through the WP API using a tree-shakable TypeScript library.

## Pre-requisites
- Make sure your WordPress site has the WP REST API enabled.
- It can cause CORS issues if you're using a local WordPress site.

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

posts.fetch().then((posts: PostDataType[]) => {
  console.log(posts);
})
.catch((err) => {
  console.log(err);
});
```

### Retrieve User
This is an example of how to retrieve user data from your WordPress site using the `User` class.
```
import {User, UserDataType} from "@quickdevelopment/wp-js";

const user = new User(116)

user.fetch().then((user: UserDataType[]) => {
  console.log(user);
})
.catch((err) => {
  console.log(err);
});
```

## Create your own API class
You can create your own API class to retrieve data from the WP API. This is an example of how to create a custom API class.
```
import {WPJSBase} from "@quickdevelopment/wp-js";

class CustomEndpoint extends WPJSBase<CustomEndpointType> {
  constructor() {
    super();
    this.endpoint = 'my-endpoint'
  }

  public fetch(): Promise<CustomEndpointType> {
    return this.get();
  }
}
```

## Coming up
- [ ] Add more API classes to retrieve data from the WP API
- [ ] Examples of how to use the library in multiple contexts
- [ ] Add a documentation site

## Issues
If you find any issues with the library, please create an issue on the GitHub repository.

| Known Issues | Status |
|--------------|--------|
|              |        |

## Contributing
If you want to contribute to this project, please read the CONTRIBUTING.md file.