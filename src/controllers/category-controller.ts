import CategoryModel from "../models/category-model";
import { CategoryInterface } from "../types/category-type";
const Promises = require("promise");
import { LoggerManager } from "../logger-services/logger-manager";

export class CategoryController extends CategoryModel {

    private name: String;
    private tags: [String];

    constructor(private _cat: CategoryInterface) {
        super();
        this.name = _cat.name;
        this.tags = _cat.tags;
    }
    static getSingleCategory = (id: String) => {
        return CategoryModel.findById(id, (err: any, data: any) => {
            if (err) {
                return LoggerManager(err, true);
            }
            return data;
        });
    }
    static getMultipleCategory = () => {
        return new Promises((resolve: any, reject: any) => {
            CategoryModel.find({}, (err, categories) => {
                if (err) {
                    LoggerManager(err, true);
                    return reject(err);
                }
                resolve(categories);
            });
        });
    }
    public saveCategoryToDb = async(cat: any) => {
        return await new Promises((resolve: any, reject: any) => {
            cat.save((err: any, catResult: any) => {
                if (err) {
                    LoggerManager(err, true);
                    return reject(err);
                }
                resolve(catResult);
            });
        });
    }
    static deleteCategory = (id: String) => {
        return new Promises((resolve: any, reject: any) => {
            CategoryModel.findByIdAndRemove(id, (err, ref) => {
                if (err) {
                    LoggerManager(err, true);
                    return reject(err);
                }
                resolve(ref);
            });
        });
    }
    static updateCategory = (id: String, update: any) => {
        return new Promises((resolve: any, reject: any) => {
            CategoryModel.findByIdAndUpdate(id, update, {new: true}, (err, updated) => {
                if (err) {
                    LoggerManager(err, true);
                    return reject(err);
                }
                resolve(updated);
            });
        });
    }
}