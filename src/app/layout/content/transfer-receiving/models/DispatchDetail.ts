export class DispatchDetail {
  public DispatchDetailId?: number;
  public DispatchId?: number;
  public ItemId?: string;
  public Quantity?: number;
  public SNno?: string;
  public PRno?: string;
  public Status?: string;
  public ForwardLocation?: string;

  constructor(values: Object = {}) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
