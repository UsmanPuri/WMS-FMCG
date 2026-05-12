export class DispatchDetail {
  public DispatchDetailId?: number;
  public DispatchId?: number;
  public ItemId?: string;
  public Quantity?: number;
  public SNno?: string;
  public PRno?: string;
  public Status?: string;
  // public ExpiryDate?: Date;
  // public MfgDate?: Date;

  constructor(values: Object = {}) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
