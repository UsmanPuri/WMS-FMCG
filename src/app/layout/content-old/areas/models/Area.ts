import { BaseModel } from "../../../../helpers/models/BaseModel";
import { City } from '../../cities/models/City';
export class Area extends BaseModel {
  public AreaId?: number | string;
  public Name: string;
  public CityId: number | string;
  public city?: City;
  AML_City: any = [];

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
