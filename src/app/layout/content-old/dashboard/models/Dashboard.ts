import { BaseModel } from "../../../../helpers/models/BaseModel";
export class Dashboard extends BaseModel {
  public name: string | null = null
  public shelf_level: number = 0;
  public shelf_width: number = 0;
  public max_discount: number = 0;
  public more_info: string | null = null;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
