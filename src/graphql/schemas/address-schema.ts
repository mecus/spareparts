
const AddressSchema = () => {
    return `
        type Address {
            address: String,
            city: String,
            state: String,
            country: String,
            account_id: String
        }
        input AddressInput {
            address: String,
            city: String,
            state: String,
            country: String,
            account_id: String
        }
    `;
};
export default AddressSchema;