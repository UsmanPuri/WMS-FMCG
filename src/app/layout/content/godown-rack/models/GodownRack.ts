import { BaseModel } from "../../../../helpers/models/BaseModel";
export class GodownRack extends BaseModel {
  public GodownRowId?: number | string;
  public Name: string;
  public Alias: string;
  public GodwonId?: number; 
  public Godwom?: any;
  public GodownRackId?:number |string;
  AML_Godwom: any;

  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
