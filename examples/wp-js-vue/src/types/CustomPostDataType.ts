import { PostDataType } from "@quickdevelopment/wp-js";

export default interface CustomPostDataType extends PostDataType {
    jetpack_featured_media_url: string;
}