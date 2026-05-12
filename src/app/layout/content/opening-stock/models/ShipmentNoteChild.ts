import { BaseModel } from "../../../../helpers/models/BaseModel";
export class ShipmentNoteChild extends BaseModel {
  public ShipmentNoteChildId?: number | string;
  public ShipmentNoteId?: number | string;
  public ItemInformationId?: string;
  public PalletNo?: string;
  public Batch?: string;
  public Status?: string;
  public Quantity?: number;
  public NoOfBoxes?: number; 
  public Location?: string;
  public ExpiryDate?: string;
  public MfgDate?: string;
  public Price?: number;

  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
