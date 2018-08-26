import AdInterface from "../types/ads-type";
import AdModel from "../models/ad-model";
const Promises = require("promise");
import { LoggerManager } from "../logger-services/logger-manager";
const { GraphQLError } = require("graphql");

export class AdController extends AdModel {
    /**
     * Private properties of AdController Class listed
     */
    private part_name: String;
    private part_no: String;
    private part_model: String;
    private brand: String;
    private images: [String];
    private description: String;
    private compatible: String;
    private category: String;
    private condition: String;
    private seller_type: String;
    private seller_id: String;
    private price: Number;

    /** Initialize the properties in the constructor function */
    constructor(private _ad: AdInterface) {
        super();
        this.part_name = _ad.part_name;
        this.part_no = _ad.part_no;
        this.part_model = _ad.part_model;
        this.brand = _ad.brand;
        this.compatible = _ad.compatible;
        this.condition = _ad.condition;
        this.description = _ad.description;
        this.seller_id = _ad.seller_id;
        this.seller_type = _ad.seller_type;
        this.category = _ad.category;
        this.images = _ad.images;
        this.price = _ad.price;
    }
    // Getting a single ad from the database
    /**
     * @param { id } String
     */
    static querySingleAd = (id: String) => {
        return AdModel.findById(id, (err, data) => {
            if (err) {
                // Log error to logger manager
                return LoggerManager(err, true);
            }
            return data;
        });
    };

    // Conditional query to retrieve ads from the database
    static queryMultipleAds = (query?: any) => {
        // const query = {"year": "2013", "make": {$in: ["Ford" , "Audi"]}};
        const Ad = AdModel.find().findByQuerySearch(query || {});
        return new Promises((resolve: any, reject: any) => {
            Ad.exec(function(err: any, data: any) {
                if (err) {
                    LoggerManager(err, true);
                    return reject(err);
                }
                resolve(data);
            });
        });
        // return new GraphQLError("Controller error occur");
    };

    // Creating and saving ad to the database
    public saveAdToDb = async (adv: any) => {
        return await new Promises((resolve: any, rejects: any) => {
            adv.save((err: any, result: any) => {
                if (err) {
                    LoggerManager(err, true);
                    rejects(err.message);
                }
                resolve(result);
            });
        });
    };

    // Updating a single ad to the database
    static updateAdToDb = async(id: String, data: any) => {
        const update = data;
        return await new Promises((resolve: any, reject: any) => {
            AdModel.findByIdAndUpdate(id, update, {new: true}, (err: any, updated: any) => {
                if (err) {
                    LoggerManager(err, true);
                    reject(err);
                }
                resolve(updated);
            });
        });
    };

    // Deleting a single ad from the database
    static deleteAdFromDb = async(id: String) => {
        return await new Promises((resolve: any, reject: any) => {
            AdModel.findByIdAndRemove(id, (err, ref) => {
                if (err) {
                    LoggerManager(err, true);
                    reject(err);
                }
                resolve(ref);
            });
        });
    };

    // Update many ad and delete many methods implements here
}