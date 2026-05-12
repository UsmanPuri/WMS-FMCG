import { BaseModel } from "../../../../helpers/models/BaseModel";
export class NewForm extends BaseModel {
  
  public Id?: number | string;
  public CreatedOn?: string;
  public CreatedBy?: string;
  public LastModifiedDate?: string;
  public LastModifiedBy?: string;
  public StatusId?: string;
  public Title: string;
  public Abbreviation: string;
  public ShipmentNoteChildId?: number | string;
  public ShipmentNoteId?: number | string;
  public ItemInformationId?: string;
  public PalletNo?: string;
  public Batch?: string;
  public Status?: string;
  public Quantity?: number;
  public ReceivedQuantity?: number;
  public NoOfBoxes?: number; 
  public Location?: string;
  public ExpiryDate?: string;
  public MfgDate?: string;
  public Price?: number;
  public MoveQuantity?: number;
  public Name?: string;
  public SKU?: string;
  public Description?: string;
  public Balance?:string;
  public SNno?:string;
  public WareHouseId? : string;
  public GodownId? : string;
  public GodownRowId? : string;
  public GodownRackId? : string;
  public GodownShelfId? : string;
  public ParkingStageIdFrom?: number | string;
  public selected?:boolean;
  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
