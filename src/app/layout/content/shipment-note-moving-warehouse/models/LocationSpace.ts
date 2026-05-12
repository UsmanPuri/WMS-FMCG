import { BaseModel } from "../../../../helpers/models/BaseModel";
export class LocationSpace{
  public LocationId?: number | string;
  public Location?: string;
  public CBM?: number;
  public UsedCBM?: number;  
  public FreeCBM?: number;


  constructor(values: Object = {}) {
    if (values) {
      
      Object.assign(this, values);
    }
  }
}
