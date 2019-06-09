import { BaseModel } from "./baseModel";
import { Post } from "./post";

export class Category extends BaseModel {
    name: string;
    posts?: Post[];
}