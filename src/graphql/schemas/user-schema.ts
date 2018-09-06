const UserSchema = () => {
    return `
        type User {
            _id: String,
            email: String,
            password: String,
            createdAt: String
        }
        input userInput {
            email: String,
            password: String
        }
    `;
};
export default UserSchema;