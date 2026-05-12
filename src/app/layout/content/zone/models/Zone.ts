import { BaseModel } from '../../../../helpers/models/BaseModel';
import { Province } from '../../provinces/models/Province';
import { Region } from '../../region/models/Region';
export class Zone extends BaseModel {
  
  public ZoneId?: number | string;
  public RegionId?: number | string;
  public ZoneName: string;
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
