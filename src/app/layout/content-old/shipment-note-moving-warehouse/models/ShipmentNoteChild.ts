import { BaseModel } from "../../../../helpers/models/BaseModel";
export class ShipmentNoteChild extends BaseModel {
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
  public WareHouseId? : string;
  public GodownId? : string;
  public GodownRowId? : string;
  public GodownRackId? : string;
  public GodownShelfId? : string;
  public ParkingStageIdFrom?: number | string;
  public selected?:boolean;
  public ItemCBM?:number;
  public SNno?: string;
  public PRno?: string;
  public GatePass?: string;
public ServiceRequest?: string
public RMA?: string
public RecievedFrom?: string
public ConsignmentNo?: string
public ICare?: string
public BusinessType?: string
public HandlerName?: string
public InboundPool?: string
public Network?: string
public PackingListNo?: string
public ReceivedStation?: string
public ContractNo?: string
public DeliveryType?: string
public InboundAgainst?: string
public ItemRemainQuantity?: number


  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
