import { BaseModel } from "../../../../helpers/models/BaseModel";
export class GodownShelf {
  public GodownShelfId?: number | string;
  public Name: string;
  public Alias: string;
  public GodwomId?: number; 
  public Godwom?: any;
  public GodownRowId?: number; 
  public GodwomRow?: any;
  public WarehouseId?: number; 
  public Warehouse?: any;
  public Height?: number;
  public Width?: number;
  public Depth?: number;  
  public GodownRackId?: number;
  AML_Warehouse: any=[];
  AML_Godwom: any=[];
  AML_GodownRack: any=[];
  constructor(values: Object = {}) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
