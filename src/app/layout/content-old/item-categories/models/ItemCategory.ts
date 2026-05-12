import { BaseModel } from "../../../../helpers/models/BaseModel";
export class ItemCategory extends BaseModel {
  public ItemId?: string;
  public Name?: string;
  public Description?: string;
  public CustomerId?:number;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
