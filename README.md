# WP-JS

Get all your public WordPress data through the WP API using a tree-shakable TypeScript library.

## Pre-requisites
- Make sure your WordPress site has the WP REST API enabled.
- It can cause CORS issues if you're using a local WordPress site.

## Installation
```
npm install wp-js
```

## Usage

### Create a `wp-js.config.ts` file
```
// wp-js.config.ts
import {WPJSConfigOptions} from "wp-js";

export const WPJSConfig: WPJSConfigOptions = {
    // Replace with your WordPress API URL
    apiUrl: 'https://developer.wordpress.org/wp-json/wp/v2',
    embed: true
}
```

### Setting the Config
If you have created the `wp-js.config.ts` file inside the root of your project, you can set the config by importing the `ConfigManager` class and calling the `getInstance` method with the `WPJSConfig` object as a parameter.
```
// src/main.ts
import { ConfigManager } from "wp-js";
import { WPJSConfig } from '../wp-js.config';

ConfigManager.getInstance(WPJSConfig);
```

### Retrieve Posts
This is an example of how to retrieve posts from your WordPress site using the `Post` class.
```
import {Posts} from "wp-js";

const posts = new Posts()

posts.take(5, 1).getPosts().then((res) => {
  console.log(res);
})
  .catch((err) => {
    console.log(err);
  });
```

## Coming up
- [ ] Add more API classes to retrieve data from the WP API
- [ ] Examples of how to use the library in multiple contexts

## Issues
If you find any issues with the library, please create an issue on the GitHub repository.

| Known Issues | Status |
|--------------|--------|
|              |        |

## Contributing
If you want to contribute to this project, please read the CONTRIBUTING.md file.