import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  public UserId: string ;
  public UserName: string ;
  public Email: string ;
  public FirstName: string ;
  public LastName: string ;

  constructor(values: Object = {}) {
    super();
    Object.assign(this, values);
  }
}

export interface Role {
  id: number;
  slug: string;
}

export interface UserRole {
  id: number;
  user_id: number;
  role_id: number;
  roles: Role[];
}

export interface Profile {
  id?: number;
  user_id?: number;
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
  image?: string | null;
  gender?: string | null;
  dob?: string | null;
  country_id?: string | null;
  description?: string | null;
  country?: any;
}
