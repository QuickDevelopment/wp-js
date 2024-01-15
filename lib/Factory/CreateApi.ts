import ApiOptions from "../Types/ApiOptions.ts";
import WPJSBase from "../Base/WPJSBase";

export default function createApi<T>(options: ApiOptions): new () => WPJSBase<T> {
    return class extends WPJSBase<T> {
        constructor() {
            super(options.endpoint);
            if (options.author !== undefined) {
                this.setSearchParams({ author: options.author });
            }

            if (options.slug !== undefined) {
                this.setSearchParams({ slug: options.slug });
            }

            if (options.search !== undefined) {
                this.setSearchParams({ search: options.search });
            }
        }
    };
}