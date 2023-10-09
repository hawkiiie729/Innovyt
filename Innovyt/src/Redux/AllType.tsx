
export interface  priceMenu {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  availabilityType?: string;
  availabilitySlot?: {
    from:Date;
    to:Date;
    };
  template?: string;
  dualPrice?:boolean;
  orderNumberPrefix?:number;
  categories: PriceMenuCategoryRes[];
}

export interface PriceMenuCategoryRes {
  name: string;
  image?: string;
  items: Item[];
}

export interface ItemPrice{
    id?: number;
    priceType:'all' | 'cash' | 'card';
    price: number;
    priceDesc?: string;
    discount?: number;
    discountDesc?: string;
    priceAfterDiscount?: number;
    priceAfterDiscountDesc?: string;
}

export interface Category {
  tenantCode?: string;
  name?: string;
  description?: string;
  featureImage?: string;
  isActive?: boolean;
  createdOn?: Date;
  id?: string;
}
export interface Item {
    id: string;
    name: string;
    code?: string;
    sku?: string;
    isAvailable?: boolean;
    showOnPos?: boolean;
    description?: string;
    featureImage: string;
    images?: string[];
    categories?: Category[];
    variants?: ItemVariant[];
    hasVariants?: boolean;
    prices?: ItemPrice[];
    ingredients?: [];
    addOns?: AddOnGroup[];
    isActive?: boolean;
    createdBy?: string;
    createdOn?: Date;
    updatedBy?: string;
    updatedOn?: Date;
}

export interface ItemVariant {
    id: string;
    type: string;//size
    name: string;//small, medium
    isAvailable: boolean;
    prices?: ItemPrice[];
}

export interface AddOnGroup {
    id?: string;
    groupName: string;
    featureImage?: string;
    isRequired?: boolean;
    maxSelection?: number;
    addOnItems?: AddOnItem[];
}
export interface AddOnItem {
  id?: string;
  description?: string;
  featureImage?: string;
  name?:string;
  isActive?: boolean;
  tenantCode?: string;
  price?: {
    price?:number;
    priceType?:string;
    id?:string;
    };
  createdOn?: Date;
}


 