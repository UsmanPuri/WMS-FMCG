import { BaseModel } from "../../../../helpers/models/BaseModel";
export class WMSService extends BaseModel {
  public ServiceName: string;
  public ServiceType:  string;
  public UnitOfMeasurement: string;
  

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
