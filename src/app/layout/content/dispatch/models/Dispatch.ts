import { BaseModel } from "../../../../helpers/models/BaseModel";
import { DispatchDetail } from "./DispatchDetail";
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

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
