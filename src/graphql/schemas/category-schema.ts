
const categorySchema = () => {
    return `
        type Category {
            _id: String,
            name: String,
            tags: [String]
        }
        input CategoryInput {
            name: String,
            tags: [String]
        }
    `;
};
export default categorySchema;