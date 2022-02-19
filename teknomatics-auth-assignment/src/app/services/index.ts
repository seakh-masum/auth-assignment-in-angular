import { AuthService } from './auth.service';
import { CustomerService } from './customer.service';
import { GlobalService } from './global.service';

export const services = [AuthService, CustomerService, GlobalService];

export * from './auth.service';
export * from './customer.service';
export * from './global.service';
