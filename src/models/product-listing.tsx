export interface IProductPrice {
    type: string;
    price: string;

}

export interface IProductVariation {
    colour: string;
    image: string;

}

export interface IProductListing {
    key: string;
    size: string;
    chip: string;
    variation: IProductVariation[];
    productbundle: string[];
    specs: string[];
    price: IProductPrice[];
}

export type IProductListings = IProductListing[];