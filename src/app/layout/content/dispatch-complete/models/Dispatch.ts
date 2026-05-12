import { BaseModel } from "../../../../helpers/models/BaseModel";
import { DispatchDetail } from "./DispatchDetail";
import { Customer } from "../../Customers/models/Customer"; 
import { PickupOrder } from "../../pickup-order/models/PickupOrder"; 
import { ItemInformation } from "../../items/models/ItemInformation"; 
import { Warehouse } from "../../warehouse/models/warehouse"; 
export class Dispatch extends BaseModel {
  public DispatchId?: number | string;
  public CustomerId?: number;
  public Agent?: string;
  public DriverName?:string;
  public GatePassNo?:string;
  public PhoneNumber?:string;
  public Address?: string;
  public DispatchDate?: string;
  public PickupOrderId?: number;
  public DispatchDetails?: DispatchDetail[];
  public SupervisorName?: string;
  public SealNo?: string;
  public Transporter?: string;
  public VehicleSize?: string;
  public Remarks?: string;
  public VehicleNo?: string;
  public WarehouseId?: string | number;
  public IsCompleted?: boolean;
  public IsReceived?: boolean;
  public IsDeleted?: boolean;
  public RefNo?: string;
  public ProjectName?: string;
  public IsPartialReceived?: boolean;
  public AML_Customers?: Customer;
  public AML_DispatchDetail?: DispatchDetail;
  public AML_PickupOrder?: PickupOrder;
  public AML_ItemInformation?: ItemInformation;
  public AML_Warehouse?: Warehouse;
  public Shift?: string;
  public ReportingTime?:string;
  public TimeIn?:string;
  public TimeOut?: string;
  
  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
