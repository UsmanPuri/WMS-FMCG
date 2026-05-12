import { BaseModel } from "../../../../helpers/models/BaseModel";
export class StockMovement extends BaseModel {
  
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
  public ItemId?: string;
  public PalletNo?: string;
  public BatchCode?: string;
  public Status?: string;
  public Quantity?: number;
  public ReceivedQuantity?: number;
  public NoOfBoxes?: number; 
  public OldLocation?: string;
  public NewLocation?: string;
  public ExpiryDate?: string;
  public MfgDate?: string;
  public Price?: number;
  public MoveQuantity?: number;
  public Name?: string;
  public SKU?: string;
  public Description?: string;
  public Balance?:string;
  public SNno?:string;
  public WarehouseId? : string;
  public GodownId? : string;
  public GodownRowId? : string;
  public GodownRackId? : string;
  public GodownShelfId? : string;
  public ParkingStageIdFrom?: number | string;
  public selected?:boolean;
  public warehouseName:string;
  public itemName:string;
  public RecordReference : string;
  public TransctionDate : Date;
  public Debit?: number;
  public Credit?: number;
  public Location?: string;
  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
