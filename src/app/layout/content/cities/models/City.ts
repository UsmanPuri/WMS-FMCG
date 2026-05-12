import { BaseModel } from "../../../../helpers/models/BaseModel";
import { Province } from "../../provinces/models/Province";
import { Region } from "../../region/models/Region";
import { Zone } from "../../zone/models/Zone";
export class City extends BaseModel {
  public CityId?: number | string;
  public Name: string;
  public ProvinceId: number | string;
  public RegionId: number | string;
  public ZoneId: number | string;
  public Province?: Province;
  public Region?: Region;
  public Zone?: Zone;
  AML_Province: any=[];
  AML_Region: any=[];

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
