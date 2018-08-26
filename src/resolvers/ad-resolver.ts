import { AdController } from "../controllers/ad-controller";
import SparePartInterface from "../types/ads-type";
const { GraphQLError, GraphQLString } = require("graphql");

export interface AdResolverType {
    GetSingleAd(arg: any, context: any): any;
    GetQueryAds(): any;
    CreateAd(input: any): any;
    UpdateAd(input: any): any;
    RemoveAd(arg: String): any;
}
export default function AdResolver(): AdResolverType {
    return {
        GetSingleAd: (arg: any, context: any) => {
            const { id } = arg.qid;
            return AdController.querySingleAd(id);
        },
        GetQueryAds: () => {
            const query = {"year": {$in: ["2013", "2017"]}, "make": {$in: ["Ford" , "BMW"]}};
            // const e = new GraphQLError("New graph error");
            // console.log(e);
            return AdController.queryMultipleAds({});
            // throw new Error("Testing error for graphql");
        },

        // Every mutation operation must be check for authorization
        CreateAd: (input: any) => {
            // Check for user authorization before saving
            const { advert } = input;
            const ad = new AdController(advert);
            return ad.saveAdToDb(ad);
        },
        UpdateAd: (arg: any) => {
            // Check for user authorization before saving
            const { update } = arg;
            const { id } = arg.qid;
            return AdController.updateAdToDb(id, update);
        },
        RemoveAd: (arg: any) => {
            // Check for user authorization before saving
            const { id } = arg.qid;
            return AdController.deleteAdFromDb(id);
        }
    };
}