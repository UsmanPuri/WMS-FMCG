"use strict";
import { AppConfig } from "../../app.config";

const apiConfig = new AppConfig();

export const URL_SERVER: string = apiConfig.config.apiUrl.backendUrl;

// Customer Types
export const CUSTOMER_TYPES: Object[] = [
  {
    value: "L-LocalSale", name: "L - Local Sale",
  } 
];

// Currencies
export const CURRENCIES: Object[] = [
  {
    value: "1", name: "Pak Rupees",
  }, {
    value: "2", name: "U.S. Dollar",
  }
];



// Nature of business Vendor
export const NATURE_OF_BUSINESS: Object[] = [
  {
    value: "1", name: "Manufacturer",
  }, {
    value: "2", name: "Authorized Agent",
  }, {
    value: "3", name: "Trader",
  }, {
    value: "4", name: "Consulting Company",
  }
];

// Types of business Vendor
export const TYPES_OF_BUSINESS: Object[] = [
  {
    value: "1", name: "CORPORATION",
  }, {
    value: "2", name: "LIMITED LIABILITY CO",
  }, {
    value: "3", name: "PARTNERSHIP",
  }, {
    value: "4", name: "SOLE PROPRIETORSHIP",
  }
];

// Vendor Types
export const VENDOR_TYPES: Object[] = [
  {
    value: "E-Export", name: "E - Export",
  }, {
    value: "W-WholeSale", name: "W - Whole Sale",
  }
  , {
    value: "L-LocalSale", name: "L - Local Sale",
  } , {
    value: "R-Retail", name: "R - Retail",
  }
  , {
    value: "F-FOC", name: "F - FOC",
  }
];

//  STATUSES 
export const STATUSES: object[]=[
  {
    value: "1", name: "Active",
  }
  , {
    value: "2", name: "De-Active",
  }
]

//  Shipment methods 
export const PICKUP_METHODS: object[]=[
  {
    value: "", name: "Select one",
  },
  {
    value: "5", name: "Custom",
  },
  //{
  //   value: "1", name: "FIFO",
  // }
  // , {
  //   value: "2", name: "LIFO",
  // }, 
  // {
  //   value: "3", name: "LEFO",
  // },
   {
    value: "4", name: "FEFO",
  }
]

//  Pallet size 
export const PALLET_SIZES: object[]=[
  {
    value: "", name: "Select one",
  },
  {
    value: "S", name: "Small",
  },
  {
    value: "M", name: "Medium",
  }
  , {
    value: "L", name: "Large",
  } , {
    value: "XL", name: "Extra Large",
  }
]



