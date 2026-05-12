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
  public ItemCBM?: number;
  public ItemName?: string;
  public SNno?: string;
  public PRno?: string;
  public ServiceRequest?: string;
  public GatePass?: string;
  public RMA?: string;
  public RecievedFrom?: string;
  public ConsignmentNo?: string;
  public ICare?: string;
  public BusinessType?: string;
  public HandlerName?: string;
  public InboundPool?: string;
  public Network?: string;
  public PackingListNo?: string;
  public ReceivedStation?: string;
  public ContractNo?: string;
  public DeliveryType?: string;
  public InboundAgainst?: string;
  public Description?: string;
  constructor(values: Object = {}) {
    if (values) {
      super();
      Object.assign(this, values);
    }
  }
}
