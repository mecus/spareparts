const { buildSchema } = require("graphql");
import AdSchema from "./schemas/ad-schema";
import AccountSchema from "./schemas/schema.account";
import categorySchema from "./schemas/category-schema";
const { GraphQLString, GraphQLObject, GraphQLInt, GraphQLInputType } = require("graphql");

const gqlSchema = buildSchema(`
    type Query {
        GetSingleAd(qid: QueryId): Ad,
        GetQueryAds: [Ad],
        QueryAccount(id: String): Account,
        QueryAccounts: [Account],
        GetSingleCategory(qid: QueryId): Category
        GetQueryCategories: [Category]
    }
    type Mutation {
        CreateAd(advert: AdInput): Ad
        UpdateAd(qid: QueryId, update: AdInput): Ad
        RemoveAd(qid: QueryId): Ad
        CreateUserAccount(user: UserAccountInput): Account
        CreateCategory(catData: CategoryInput): Category
        RemoveCategory(qid: QueryId): Category
        UpdateCategory(qid: QueryId, update: CategoryInput): Category
    }
    input QueryId {
        id: String
    }
    ${AdSchema()}
    ${AccountSchema()}
    ${categorySchema()}
`);

export default gqlSchema;