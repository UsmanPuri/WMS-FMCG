import { BaseModel } from "../../../../helpers/models/BaseModel";
export class ParkingStages extends BaseModel {
  public id?: number | string;
  public Name?: string;
  public Description?: string;
  

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
