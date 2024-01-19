/**
 * WPJSSingleton class
 * @since 1.0.0
 */
export default class WPJSSingleton {
    protected static _instance: WPJSSingleton;

    protected constructor() {
        // Protected constructor to allow extending the class.
    }

    /**
     * Get the instance of the WPJSSingleton class.
     * @since 1.0.0
     */
    public static getInstance(): WPJSSingleton {
        if (!WPJSSingleton._instance) {
            WPJSSingleton._instance = new WPJSSingleton();
        }
        return WPJSSingleton._instance;
    }
}