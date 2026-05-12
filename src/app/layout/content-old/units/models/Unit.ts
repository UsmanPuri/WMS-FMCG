import { BaseModel } from "../../../../helpers/models/BaseModel";
export class Unit extends BaseModel {
  public Id?: number | string;
  public CreatedOn?: string;
  public CreatedBy?: string;
  public LastModifiedDate?: string;
  public LastModifiedBy?: string;
  public StatusId?: string;
  public Title: string;
  public Abbreviation: string;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
