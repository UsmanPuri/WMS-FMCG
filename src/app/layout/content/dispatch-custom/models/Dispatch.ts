import { BaseModel } from "../../../../helpers/models/BaseModel";
import { DispatchDetail } from "./DispatchDetail";
import { Customer } from "../../Customers/models/Customer"; 
import { PickupOrder } from "./PickupOrder"; 
import { Warehouse } from "../../warehouse/models/warehouse"; 
import { ItemInformation } from "../../items/models/ItemInformation"; 
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
  public Remarks?: string;
  public VehicleNo?: string;
  public ProjectName?: string;
  public RefNo?: string;
  public WarehouseId?: string | number;
  public IsCompleted?: boolean;
  public IsDeleted?: boolean;
  public AML_Customers?: Customer;
  public AML_DispatchDetail?: DispatchDetail;
  public AML_PickupOrder?: PickupOrder;
  public AML_ItemInformation?: ItemInformation;
  public AML_Warehouse?: Warehouse;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
