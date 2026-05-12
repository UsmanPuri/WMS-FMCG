export class DispatchDetail {
  public DispatchDetailId?: number;
  public DispatchId?: number;
  public ItemId?: string;
  public Quantity?: number;


  constructor(values: Object = {}) {
    if (values) {
      Object.assign(this, values);
    }
  }
}
