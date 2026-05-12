import { BaseModel } from "../../../../helpers/models/BaseModel";
export class GodownRow {
  public GodownRowId?: number | string;
  public Name: string;
  public Alias: string;
  public GodwonId?: number; 
  public Godwom?: any;
  AML_Godwom: any=[];

  constructor(values: Object = {}) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
