import { BaseModel } from "../../../../helpers/models/BaseModel";

export class LocationTracking extends BaseModel {
 
 
  public CBM?: number;  
  public UsedCBM?: number;
  public FreeCBM?: number;   
  public Location?: string;    
  public LocationId?: number;   
  
 

  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
