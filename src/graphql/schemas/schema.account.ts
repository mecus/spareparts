const AccountSchema = () => {
    return `
    type Account {
        first_name: String,
        last_name: String,
        phone: String,
        email: String,
        account_type: String,
        isActivated: Boolean,
        addresses: [Address]
    }
    input UserAccountInput {
        first_name: String,
        last_name: String,
        phone: String,
        email: String,
        account_type: String,
        isActivated: Boolean,
        addresses: [UserAddress]
    }
    input UserAddress {
        address: String,
        city: String,
        state: String,
        country: String,
        account_id: String
    }
    `;
};
export default AccountSchema;