import { BaseModel } from "../../../../helpers/models/BaseModel";
import { Region } from "../../region/models/Region";
import { City } from "../../cities/models/City";
import { Zone } from "../../zone/models/Zone";
export class Distributors extends BaseModel {
  public CustomerId?: number;
  public ProvinceId?: number | null;
  public RegionId?: number | null;
  public Region?: Region;
  public ZoneId?: number | null;
  public Zone?: Zone;
  public CityId?: number | null;
  public City?: City;
  public DistName: string;
  public ContactPerson: string;
  public Mobile: string;
  public Email: string;
  public DistAddress: string;
  public DistCode: string;
  public CreatedBy: string;
  

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
