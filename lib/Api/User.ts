import WPJSBase from "../Base/WPJSBase";
import UserDataType from "../Types/UserDataType";

/**
 * User class.
 *
 * @since 2.0.0
 */
export default class User extends WPJSBase<UserDataType> {
    private _userId: number;

    constructor(userId: number) {
        super();
        this.endpoint = 'users/' + userId;
        this._userId = userId;
    }

    /**
     * Set the user id.
     * @param userId
     *
     * @since 2.0.0
     * @description
     * This will set the user id. This is useful if you want to get posts from different users while keeping the same user instance.
     * @example
     * import {User} from "@quickdevelopment/wp-js";
     *
     * const user = new User(1);
     * user.get().then((user) => {
     *     // This will return all information from user 1.
     *     console.log(user)
     * });
     *
     * user.byUserId(2).get().then((user) => {
     *     // This will return all information from user 2.
     *     console.log(user)
     * });
     */
    public byUserId(userId: number): this {
        this._userId = userId;
        this.endpoint = 'users/' + userId;
        return this;
    }

    /**
     * Get the user id.
     * @return userId
     * @since 2.0.0
     * @example
     * import {User} from "@quickdevelopment/wp-js";
     *
     * const user = new User(1);
     *
     * // This will return 1.
     * user.getUserId();
     */
    public getUserId(): number {
        return this._userId;
    }

    /**
     * Get the user data.
     * @since 2.0.0
     * @example
     * import {User} from "@quickdevelopment/wp-js";
     *
     * const user = new User(1);
     *
     * user.get().then((user) => {
     *     console.log(user)
     * })
     */
    public async fetch(): Promise<UserDataType> {
        return this.get();
    }
}