import { BaseModel } from "../../../../helpers/models/BaseModel";

export class AsnTracking extends BaseModel {
  public ItemInformationId?: number | string;
  public ShipmentNoteId?: number | string;
  public Name?: string;
  public CustomerName?: string;
  public Batch?: string;  
  public ASNNo?: string;
  public Balance?: number;
  public ExpiryDate?: string;  
  public MfgDate?: string;    
  public ParkingName?: string;    
  public ParkingStageId?: number;    

  public ShipmentNoteChildId?: number | string;

  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
