import { BaseModel } from "../../../../helpers/models/BaseModel";
import { PickupOrderChild } from "./PickupOrderChild";
import { City } from "../../cities/models/City";
import { Customer } from "../../Customers/models/Customer"; 
import { Warehouse } from "../../warehouse/models/warehouse"; 

export class PickupOrder extends BaseModel {
  public AML_Customers: Customer;
  public AML_Warehouse: Warehouse;
  public PickupOrderId?: number | string;
  public CustomerId?: number;
  public WarehouseId?: number;
  public WarehouseTo?: number;
  public CustomerOrderNo?: string;
  public LoadingDate?: string;
  public PCRNo?: string;
  public IRNo?: string;
  public Plant?: string;
  public OrderDate?: string;
  public AML_City?: City;
  public waybill?: string;
  public OriginWarehouse?: string;
  public ContactPerson?: string;
  public Consignee?: string;
  public PickupMethod?: number;
  public ConsigneeContact?: string;
  public Address?: string;  
  public CityId?: string;  
  public State?: string;  
  public Country?: string;  
  public Telephone?: string;  
  public WarehouseName?: string; 
  public CustomerName?: string; 
  public Name?: string; 
  public Method?: number; 
  public CityName?: string; 
  public FormType?: string;
  public DistName?: string;
  public DistCode?: string;
  public DistAddress?: string;
  public IsDeleted?: boolean;
  public PickupOrderChilds?: PickupOrderChild[];

  
  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
