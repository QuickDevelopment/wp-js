import WPJSSingleton from "../Singleton/WPJSSingleton";
import {WPJSConfig} from '../wp-js.config';
import WPJSConfigOptions from "../Types/WPJSConfigOptions";

/**
 * ConfigManager
 *
 * @description
 * ConfigManager is a singleton class that loads the config from wp-js.config.ts
 *
 * @example
 * import {ConfigManager} from "@quickdevelopment/wp-js";
 *
 * ConfigManager.getInstance({ apiUrl: 'https://api.wordpress.org/wp-json/wp/v2', embed: true });
 */
export default class ConfigManager extends WPJSSingleton {
    private readonly _config: WPJSConfigOptions;

    private constructor(customConfig?: WPJSConfigOptions) {
        super();
        this._config = this.loadConfig(customConfig);
    }

    public static getInstance(customConfig?: WPJSConfigOptions): ConfigManager {
        if (!ConfigManager._instance) {
            ConfigManager._instance = new ConfigManager(customConfig);
        }
        return ConfigManager._instance as ConfigManager;
    }

    /**
     * Get the config
     *
     * @returns {WPJSConfigOptions}
     * @example
     * import { ConfigManager } from "@quickdevelopment/wp-js";
     *
     * const config = ConfigManager.getInstance();
     *
     * // It will return your earlier provided config
     * console.log(config.getConfig());
     */
    public getConfig(): WPJSConfigOptions {
        return this._config;
    }

    /**
     * Load the config
     * @param customConfig
     * @private
     */
    private loadConfig(customConfig?: WPJSConfigOptions): WPJSConfigOptions {
        return { ...WPJSConfig, ...customConfig };
    }
}