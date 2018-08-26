import * as mongoose from 'mongoose';

const schemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {type: schemaTypes.String},
    tags: [{type: schemaTypes.String}]
});

const CategoryModel = mongoose.model("CategoryModel", CategorySchema);
export default CategoryModel;