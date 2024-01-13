# wp-js

Note: This project is still in development and is not ready for production use.

Get all your public WordPress data through the WP API using a tree-shakable TypeScript library.

## Installation
```
npm install wp-js
```

## Usage

### Importing ConfigManager
```
import { ConfigManager } from 'wp-js';

const configManager = ConfigManager.getInstance();
const config = configManager.getConfig();
```

### Importing Additional Classes
```
import { ConfigManager, Caller, Singleton } from 'wp-js';

const configManager = ConfigManager.getInstance();
const config = configManager.getConfig();

const callerInstance = new Caller();
const singletonInstance = Singleton.getInstance();
```
## Configuration

The library allows you to configure your WordPress API settings through the `ConfigManager` class.

### Example Configuration
```
// main.ts or equivalent
import { ConfigManager } from 'wp-js';

const wpConfig = {
apiBaseUrl: 'https://your-wordpress-site.com/wp-json',
// Add any other configuration properties
};

const configManager = ConfigManager.getInstance(wpConfig);
const config = configManager.getConfig();
```