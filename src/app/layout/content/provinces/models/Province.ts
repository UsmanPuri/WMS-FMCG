import { BaseModel } from "../../../../helpers/models/BaseModel";
export class Province extends BaseModel {
  public Id?: number | string;
  public Name: string;
  public Abbreviation?: string;
  public CountryId?: number | string;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
