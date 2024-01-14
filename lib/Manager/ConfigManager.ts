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
 * import { ConfigManager } from "wp-js";
 * import { WPJSConfig } from "../wp-js.config";
 *
 * const config = ConfigManager.getInstance(WPJSConfig);
 */
export default class ConfigManager extends WPJSSingleton {
    private readonly config: WPJSConfigOptions;

    private constructor(customConfig?: WPJSConfigOptions) {
        super();
        this.config = this.loadConfig(customConfig);
    }

    public static getInstance(customConfig?: WPJSConfigOptions): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager(customConfig);
        }
        return ConfigManager.instance as ConfigManager;
    }

    /**
     * Get the config
     *
     * @returns {WPJSConfigOptions}
     * @example
     * import { ConfigManager } from "wp-js";
     *
     * const config = ConfigManager.getInstance();
     *
     * // It will return your earlier provided config
     * console.log(config.getConfig());
     */
    public getConfig(): WPJSConfigOptions {
        return this.config;
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