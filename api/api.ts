export * from './authenticationManagement.service';
import { AuthenticationManagementService } from './authenticationManagement.service';
export * from './userManagement.service';
import { UserManagementService } from './userManagement.service';
export const APIS = [AuthenticationManagementService, UserManagementService];
