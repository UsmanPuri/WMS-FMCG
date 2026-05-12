export class PickupOrderChild {
  public PickupOrderChildId?: number;
  public PickupOrderId?: number;
  public RelOrd?: string;
  public ItemId?: string;
  public Quantity?: number;
  public UnitId?: number;
  public ItemName?: string;
  public UnitName?: string;
  public SNno?: string;
  public PRno?: string;
  public Status?: string;
  public SRno?: string;
  public InboundPool?: string;

  constructor(values: Object = {}) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
