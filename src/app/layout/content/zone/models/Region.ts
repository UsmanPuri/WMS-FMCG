import { BaseModel } from '../../../../helpers/models/BaseModel';
import { Province } from '../../provinces/models/Province';
export class Region extends BaseModel {
  public RegionId?: number | string;
  public Name: string;
  public ProvinceId: number | string;
  public Province?: Province;
  AML_Province: any = [];

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
