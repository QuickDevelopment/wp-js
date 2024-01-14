export default class WPJSSingleton {
    protected static instance: WPJSSingleton;

    protected constructor() {
        // Protected constructor to allow extending the class.
    }

    public static getInstance(): WPJSSingleton {
        if (!WPJSSingleton.instance) {
            WPJSSingleton.instance = new WPJSSingleton();
        }
        return WPJSSingleton.instance;
    }
}