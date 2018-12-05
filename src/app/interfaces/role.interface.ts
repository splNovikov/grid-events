export interface IRole {
  canCreateEvent: boolean;
  canCreateNews:  boolean;
  canDeleteEvent: boolean;
  canDeleteNews:  boolean;
  canUpdateEvent: boolean;
  canUpdateNews:  boolean;
  id:             number;
  name:           string;
}
