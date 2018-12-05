import { IRole } from './role.interface';

export interface IUser {
  firstName:  string;
  id:         string;
  image:      string;
  lastName:   string;
  role:       IRole;
}
