// import internal = require("assert");
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
  public Name?: string;  
  public WarehouseName?: string;  
  public ASNNo?: string;
  public DeliveryNo?: string;
  public ASNDate?: string;    
  public DriverName?: string;    
  public VehicleNo?: string; 
  public CNICNo?: string;
  public MobileNo?: string;
  public TempIn?: string;
  public TempOut?: string
  
  public ShipmentNoteChilds?:ShipmentNoteChild[];
  public AML_ShipmentNoteChild?:ShipmentNoteChild[];
  public ParkingStageId?: number | string;
  public ReceivingDate?: string; 
  public OffLoadingStartTime?: string; 
  public OffLoadingEndTime?: string; 


  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
