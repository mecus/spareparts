// interface Description {
//     details: string;
// }
export default interface AdInterface {
    part_name: String;
    part_no: String;
    part_model: String;
    brand: String;
    condition: String;
    description: String;
    category: String;
    seller_id: String;
    seller_type: String;
    images: [String];
    compatible: String;
    price: Number;
}