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
  public WarehouseName?: string;  
  public CustomerName?: string; 
  public ReceivingDate?: string; 
  public OffLoadingEndTime?: string;
  public OffLoadingStartTime?: string;
  public TempOut?:string;
  public TempIn?: string;
  public MobileNo?: string;
  public ParkingStageId?: number | string;
  public Name?: string; 
  public VehicleSize?:string;
  public Transporter?:string;
  public SealNo?:string;
  public ReportingTime?:string;
  public ShipmentNoteChilds?:ShipmentNoteChild[];
  public AML_ShipmentNoteChild?:ShipmentNoteChild[];
  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
