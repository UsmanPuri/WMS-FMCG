import { BaseModel } from "../models/BaseModel";
export class ModuleForm extends BaseModel {
  public formName: string;
  public formAlias: string;
  public moduleId: number = 0;
  public moduleCategoryId: number = 0;
  public Navigation: boolean;
  public OrderBy: number = 0;
  public Project: string;
  public IconClass: string;

  constructor(values: Object = {}) {
    super();
    if (values) {
      Object.assign(this, values);
    }
  }
}
