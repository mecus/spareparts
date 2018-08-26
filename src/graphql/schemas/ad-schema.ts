const { GraphQLString, GraphQLInt, GraphQLFloat } = require("graphql");
const AdSchema = () => {
    return `
    type Ad {
        _id: String,
        part_name: String,
        part_no: String,
        part_model: String,
        images: [String],
        description: String,
        brand: String,
        condition: String,
        seller_type: String,
        seller_id: String,
        compatible: String,
        category: String,
        price: ${GraphQLFloat},
        createdAt: String
    }
    input AdInput {
        part_name: String,
        part_no: String,
        part_model: String,
        images: [String],
        description: String,
        brand: String,
        condition: String,
        seller_type: String,
        seller_id: String,
        compatible: String,
        category: String,
        price: ${GraphQLFloat}
    }
    `;
};
export default AdSchema;
