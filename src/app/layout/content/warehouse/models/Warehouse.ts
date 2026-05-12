import { BaseModel } from "../../../../helpers/models/BaseModel";
export class Warehouse extends BaseModel {
  public WarehouseId?: number | string;
  public Name: string;
  public Abbrivation: string;
  public Longitude?: string;
  public Latitude?: string;
  public Address?: string;
  public ContactPerson?:string;
  public ContactPersonPhone?:string;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
