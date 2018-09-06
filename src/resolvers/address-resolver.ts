import { Address } from "../controllers/address-controller";
export interface AddressResolverType {
    CreateAddress(arg: any): any;
}

export default function AddressResolvers() {
    return {
        CreateAddress: (arg: any) => {
            const { address } = arg;
            const newAddress = new Address(address);
            return newAddress.saveAddress(newAddress);
        }
    };
}