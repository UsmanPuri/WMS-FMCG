import { BaseModel } from "../../../../helpers/models/BaseModel";
export class Pallet extends BaseModel {
  public PalletId?: number | string;
  public Title?: string;
  public Length?: number ;
  public Width?: number ;
  public Size?: number ;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
