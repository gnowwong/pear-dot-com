export interface IProductPrice {
    type: string;
    price: string;

}

export interface IProductVariation {
    colour: string;
    image: string;

}

export interface IProductVariance {
    label: string;
    price: number;
    inStock: boolean;
}

export interface IProductListing {
    inStock: boolean;
    key: string;
    size: string;
    chip: string;
    variation: IProductVariation[];
    productbundle: string[];
    specs: string[];
    price: IProductPrice[];
    memory?: IProductVariance[];
    storage?: IProductVariance[];
    powerAdapter?: IProductVariance[];
    chipset?: IProductVariance[];
}

export type IProductListings = IProductListing[];