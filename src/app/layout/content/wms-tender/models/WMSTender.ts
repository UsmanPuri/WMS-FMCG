import { BaseModel } from "../../../../helpers/models/BaseModel";
import { Customer } from "../../customers/models/Customer";
export class WMSTender extends BaseModel {
  public TenderReference?: string;
  public CustomerId:  number;
  public IssuanceDate?: string;
  public TenderExpiryDate?: string;
  public Gst?: string;
  public FurthurTax?: string;
  public AdditionalTax?: string;
  public WithHoldingTax?: string;
  public TenderSource?: string;
  public TenderTerm?: string;
  public CustomerName?: string;
  public AML_TenderDetail?: any[]=[];
  public AML_TenderChild?: any[]=[];
  public TenderNo?: string;
  public ProvinceId?: string;
  public CustomerAbbrivation?: string;
  public AML_Customers?: Customer;
  public RegionId?: number | string;
  //public Region?: Region;
  

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
