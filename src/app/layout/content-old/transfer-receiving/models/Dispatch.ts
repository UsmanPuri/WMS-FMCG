import { BaseModel } from "../../../../helpers/models/BaseModel";
import { DispatchDetail } from "./DispatchDetail";
import { Customer } from "../../customers/models/Customer";
import { Warehouse } from "../../warehouse/models/Warehouse";
import { PickupOrder } from "../../pickup-order/models/PickupOrder";
export class Dispatch extends BaseModel {
  public DispatchId?: number | string;
  public CustomerId?: number;
  public Agent?: string;
  public AML_Customers?: Customer;
  public AML_Warehouse?: Warehouse;
  public AML_PickupOrder?: PickupOrder
  public DriverName?:string;
  public GatePassNo?:string;
  public PhoneNumber?:string;
  public Address?: string;
  public DispatchDate?: Date;
  public PickupOrderId?: number;
  public DispatchDetails?: DispatchDetail[];
  public TransferReceiveDetails?: DispatchDetail[];
  public AML_DispatchDetail?: DispatchDetail[];
  public SupervisorName?: string;
  public Remarks?: string;
  public VehicleNo?: string;
  public WarehouseId?: string | number;
  public WarehouseFrom?: string | number;
  public WarehouseTo?: string | number;
  public IsCompleted?: boolean;
  public IsReceived?: boolean;
  public IsDeleted?: boolean;
  public ReceiveDate?: Date;
  public ReceiverHandler?: string;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
