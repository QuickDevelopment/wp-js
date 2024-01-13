import Singleton from "../Singleton/Singleton.ts";
import wpConfig from '../wp-js.config.json'

class ConfigManager extends Singleton {
    private readonly config: any;

    private constructor(customConfig?: any) {
        super();
        this.config = this.loadConfig(customConfig);
    }

    public static getInstance(customConfig?: any): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager(customConfig);
        }
        return ConfigManager.instance as ConfigManager;
    }

    public getConfig(): any {
        return this.config;
    }

    private loadConfig(customConfig?: any): any {
        const defaultConfig = wpConfig;

        return customConfig ? { ...defaultConfig, ...customConfig } : defaultConfig;
    }
}

export default ConfigManager;