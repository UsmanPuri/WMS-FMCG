import { BaseModel } from "../../../../helpers/models/BaseModel";
import { Region } from "../../region/models/Region";
import { City } from "../../cities/models/City";
export class Customer extends BaseModel {
  public RegionId?: number | null;
  public Region?: Region;
  public CityId?: number | null;
  public City?: City;
  public ZoneId?: number | null;
  public Name: string;
  public Discount: number = 0;
  public Type: string;
  public ContactPerson: string;
  public Phone: string;
  public Mobile: string;
  public Email: string;
  public FaxNo: string;
  public AccountNo: string;
  public NTN: string;
  public CustomerBusinessLineId: number | string;
  public STRN: string;
  public CNIC: string;
  public AccountCode: string;
  public Address: string;
  public RegDate: string;
  public Remarks: string;
  public State: string;
  public Country: string;
  public CreditLimit: string;
  public CreatedBy: string;
  public Abbreviation: string;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
