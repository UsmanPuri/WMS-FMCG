import { BaseModel } from "../../../../helpers/models/BaseModel";
export class Godwom extends BaseModel {
  public GodwomId?: number | string;
  public Name: string;
  public Abbreviation: string;
  public GodwomTypeId?: number;
  public Height?: number;
  public Width?: number;
  public Dept?: number;  
  public GodwomType?: any;
  public WarehouseId?:number;
  AML_GodwomType: any = [];

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
