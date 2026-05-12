import { BaseModel } from "../../../../helpers/models/BaseModel";
export class ItemInformation extends BaseModel {
  public ItemInformationId?: string;
  public ItemId?: string;
  public Name?: string;
  public Description?: string;
  public CustomerId?: number | string;
  public Height?: number;
  public Width?: number;
  public Length?: number;
  public Weight?: number;
  public UOM?: number | string;
  public MinStockLevel?: number;
  public MaxStockLevel?: number;
  public QuantityInPacking?: number;
  public Price?: number;
  public Remarks?: string;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
