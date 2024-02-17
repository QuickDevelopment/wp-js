import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/Data/UserDataType";

/**
 * User class.
 *
 * @since 2.0.0
 */
export default class User<T = UserDataType[] | UserDataType> extends WPJSBase<T> {
    constructor(endpoint?: string) {
        super();
        this.endpoint = endpoint ? endpoint : 'users';
    }

    /**
     * Set the userId.
     * @param userId
     * @since 2.0.0
     * @example
     * import {User} from "@quickdevelopment/wp-js";
     *
     * const user = new User();
     *
     * user.byUserId(1).fetch().then((user) => {
     *   console.log(user);
     * })
     */
    public byUserId(userId: number): this {
        this.endpoint = 'users/' + userId;
        return this;
    }

    /**
     * Get a single user.
     * @since 2.0.0
     * @example
     * import {User} from "@quickdevelopment/wp-js";
     *
     * const user = new User('users/1');
     *
     * user.fetch().then((user) => {
     *  console.log(user);
     * })
     */
    public async fetch(): Promise<T | T[]> {
        return this.get();
    }
}