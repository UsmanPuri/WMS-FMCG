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
  public WarehouseName?: string;       
  public ShipmentNoteChilds?:ShipmentNoteChild[];
  //public ShipmentNoteChildDTO?:ShipmentNoteChild[];
  public ParkingStageIdFrom?: number | string;
  public ParkingStageIdTo?: number | string;
  public ParkingStageId?: number | string;
  public AML_ShipmentNoteChild?:ShipmentNoteChild[];

  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
