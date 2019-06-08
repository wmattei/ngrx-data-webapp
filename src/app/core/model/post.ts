import { BaseModel } from "./baseModel";
import { Category } from "./category";

export class Post extends BaseModel{
    title: string;
    content: string;
    category: Category;
}