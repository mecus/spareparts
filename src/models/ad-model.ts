import * as mongoose from 'mongoose';
import { Document } from "mongoose";
const schemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;
const AdvertSchema = new Schema({
    part_name: String,
    part_no: String,
    part_model: String,
    brand: String,
    images: [String],
    description: String,
    compatible: String,
    category: String,
    condition: String,
    seller_type: String,
    seller_id: String,
    price: schemaTypes.Decimal128
}, {
    timestamps: {createdAt: 'createdAt'},
    emitIndexErrors: true
});
// CarPartSchema.set("autoIndex", true);
// Add query helper method for conditional query // CarPartSchema.query.findByName = fn(argv)
const handle11000Error =  (err: any, doc: Document, next: any) => {
    if (err.name == "MongoError" && err.code == 11000) { next( new Error("here was a duplicate key error") ); }
    else { next(err); }
};
AdvertSchema.post("save", handle11000Error);
AdvertSchema.post("update", handle11000Error);
AdvertSchema.post("findOneAndUpdate", handle11000Error);
AdvertSchema.post("insertMany", handle11000Error);

AdvertSchema.query.findByQuerySearch = function(query: any) {
    return this.find(query);
};
const AdModel = mongoose.model('AdModel', AdvertSchema);
export default AdModel;