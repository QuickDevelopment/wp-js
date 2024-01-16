export default class WPJSSingleton {
    protected static _instance: WPJSSingleton;

    protected constructor() {
        // Protected constructor to allow extending the class.
    }

    public static getInstance(): WPJSSingleton {
        if (!WPJSSingleton._instance) {
            WPJSSingleton._instance = new WPJSSingleton();
        }
        return WPJSSingleton._instance;
    }
}