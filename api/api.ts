export * from './authenticationManagement.service';
import { AuthenticationManagementService } from './authenticationManagement.service';
export * from './eventManagement.service';
import { EventManagementService } from './eventManagement.service';
export * from './userManagement.service';
import { UserManagementService } from './userManagement.service';
export const APIS = [AuthenticationManagementService, EventManagementService, UserManagementService];
