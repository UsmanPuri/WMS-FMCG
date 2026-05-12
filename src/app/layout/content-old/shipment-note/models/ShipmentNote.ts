import { BaseModel } from "../../../../helpers/models/BaseModel";
import { ShipmentNoteChild } from "./ShipmentNoteChild";
export class ShipmentNote extends BaseModel {
  public CustomerID?: number | string;
  public ShipmentNoteId?: number | string;
  public ShipmentNoteNo?: string;
  public CargoStatus?: string;  
  public WarehouseId?: number | string;
  public GodownId?: number | string; 
  public Remarks?: string;  
  public ASNNo?: string;
  public DeliveryNo?: string;
  public ASNDate?: string;    
  public DriverName?: string;    
  public VehicleNo?: string;
  public Name?: string;    
  public ShipmentNoteChilds?:ShipmentNoteChild[];

  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
