import { CategoryController } from "../controllers/category-controller";
import { CategoryInterface } from "../types/category-type";

export interface CategoryType {
    GetSingleCategory(arg: any): CategoryController | any;
    CreateCategory(arg: CategoryInterface): any;
    GetQueryCategories(): [CategoryController];
    RemoveCategory(arg: any): any;
    UpdateCategory(arg: any): any;
}
interface CategoryData {
    _id: String;
    name: String;
    tags: [String];
}

export default function CategoryResolvers(): CategoryType {
    return {
        GetSingleCategory: (arg: any) => {
            const { id } = arg.qid;
            return CategoryController.getSingleCategory(id);
        },
        GetQueryCategories: () => {
            return CategoryController.getMultipleCategory();
        },

        // Every mutation operation must be check for authorization
        CreateCategory: (arg: any) => {
            const { catData } = arg;
            const category = new CategoryController(catData);
            return category.saveCategoryToDb(category);
        },

        RemoveCategory: (arg: any) => {
            const { id } = arg.qid;
            return CategoryController.deleteCategory(id);
        },

        UpdateCategory: (arg: any) => {
            const { update } = arg;
            const { id } = arg.qid;
            return CategoryController.updateCategory(id, update);
        }
    };
}