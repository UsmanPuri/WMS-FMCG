import { BaseModel } from "../../../../helpers/models/BaseModel";
export class ItemBrand extends BaseModel {
  public ItemId?: string;
  public Name?: string;
  public Description?: string;
  public CustomerId?: number;
  public ShelfLife?: number;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
