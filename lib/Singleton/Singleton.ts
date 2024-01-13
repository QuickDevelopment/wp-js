class Singleton {
    protected static instance: Singleton | null = null;

    protected constructor() {
        // Protected constructor to allow extending the class.
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

export default Singleton;